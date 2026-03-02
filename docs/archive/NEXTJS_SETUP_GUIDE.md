# 🚀 Next.js 14 + TypeScript + Supabase Setup Guide

## 📋 What Was Implemented

### ✅ Phase 1 Complete

1. **TypeScript Configuration** ✅
   - `tsconfig.json` with strict mode
   - Path aliases (@/components, @/lib, @/types)
   - Next.js optimizations

2. **Next.js 14 Setup** ✅
   - App Router architecture
   - Server and Client Components
   - API Routes
   - Metadata API

3. **Supabase Integration** ✅
   - Client-side authentication
   - Server-side authentication
   - Database types
   - API routes for bookmarks

4. **Authentication System** ✅
   - Email/Password auth
   - Google OAuth
   - Protected routes
   - Session management

5. **TypeScript Types** ✅
   - Project types
   - Supabase database types
   - Component prop types

## 🗂️ New File Structure

```
project-root/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   ├── globals.css               # Global styles
│   ├── login/
│   │   └── page.tsx              # Login page
│   └── api/
│       ├── auth/
│       │   ├── callback/route.ts # Auth callback
│       │   └── signout/route.ts  # Sign out
│       └── bookmarks/
│           └── route.ts          # Bookmarks API
│
├── src/
│   ├── components/
│   │   └── Portfolio.tsx         # Main portfolio component (TS)
│   ├── lib/
│   │   └── supabase/
│   │       ├── client.ts         # Browser client
│   │       └── server.ts         # Server client
│   └── types/
│       ├── project.ts            # Project types
│       └── supabase.ts           # Database types
│
├── tsconfig.json                 # TypeScript config
├── next.config.js                # Next.js config
└── .env.local.example            # Environment variables template
```

## 🔧 Setup Instructions

### Step 1: Install Dependencies

Already done! Dependencies installed:
- next@latest
- react@latest
- react-dom@latest
- typescript
- @types/react
- @types/react-dom
- @types/node
- @supabase/supabase-js
- @supabase/ssr

### Step 2: Set Up Supabase

1. **Create a Supabase Project**
   - Go to [supabase.com](https://supabase.com)
   - Click "New Project"
   - Choose a name and password
   - Wait for setup to complete

2. **Get Your Credentials**
   - Go to Project Settings > API
   - Copy `Project URL`
   - Copy `anon/public` key

3. **Create Environment File**
   ```bash
   cp .env.local.example .env.local
   ```

4. **Add Your Credentials**
   Edit `.env.local`:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=generate_a_random_secret_here
   ```

   Generate secret:
   ```bash
   openssl rand -base64 32
   ```

### Step 3: Set Up Database Tables

Run these SQL commands in Supabase SQL Editor:

```sql
-- Create profiles table
CREATE TABLE profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  username TEXT UNIQUE,
  full_name TEXT,
  avatar_url TEXT,
  bio TEXT
);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Public profiles are viewable by everyone"
  ON profiles FOR SELECT
  USING (true);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

-- Create bookmarks table
CREATE TABLE bookmarks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  project_id TEXT NOT NULL,
  project_title TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  UNIQUE(user_id, project_id)
);

-- Enable RLS
ALTER TABLE bookmarks ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view own bookmarks"
  ON bookmarks FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own bookmarks"
  ON bookmarks FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own bookmarks"
  ON bookmarks FOR DELETE
  USING (auth.uid() = user_id);

-- Create project_views table
CREATE TABLE project_views (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users ON DELETE SET NULL,
  project_id TEXT NOT NULL,
  viewed_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Enable RLS
ALTER TABLE project_views ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can create project views"
  ON project_views FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Users can view own project views"
  ON project_views FOR SELECT
  USING (auth.uid() = user_id OR user_id IS NULL);

-- Create indexes
CREATE INDEX bookmarks_user_id_idx ON bookmarks(user_id);
CREATE INDEX bookmarks_created_at_idx ON bookmarks(created_at DESC);
CREATE INDEX project_views_project_id_idx ON project_views(project_id);
CREATE INDEX project_views_viewed_at_idx ON project_views(viewed_at DESC);
```

### Step 4: Enable Google OAuth (Optional)

1. Go to Supabase Dashboard > Authentication > Providers
2. Enable Google provider
3. Add your Google OAuth credentials
4. Add authorized redirect URL: `https://your-project.supabase.co/auth/v1/callback`

### Step 5: Run the Application

```bash
# Development mode
npm run dev

# Open http://localhost:3000
```

## 🎯 Features Available

### Authentication
- ✅ Email/Password sign up
- ✅ Email/Password sign in
- ✅ Google OAuth
- ✅ Session management
- ✅ Protected routes

### Bookmarks
- ✅ Create bookmarks (authenticated users)
- ✅ View bookmarks
- ✅ Delete bookmarks
- ✅ Sync across devices

### API Routes
- ✅ `/api/auth/callback` - OAuth callback
- ✅ `/api/auth/signout` - Sign out
- ✅ `/api/bookmarks` - CRUD operations

## 📝 Usage Examples

### Client-Side Authentication

```typescript
'use client';

import { createClient } from '@/lib/supabase/client';

export default function MyComponent() {
  const supabase = createClient();

  const signIn = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: 'user@example.com',
      password: 'password',
    });
  };

  return <button onClick={signIn}>Sign In</button>;
}
```

### Server-Side Authentication

```typescript
import { createClient } from '@/lib/supabase/server';

export default async function ServerComponent() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return <div>User: {user?.email}</div>;
}
```

### API Route with Auth

```typescript
import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

export async function GET() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Your logic here
  return NextResponse.json({ data: 'success' });
}
```

## 🔄 Migration from Old Version

### What Changed

1. **Routing**: Vite → Next.js App Router
2. **Language**: JavaScript → TypeScript
3. **Auth**: LocalStorage → Supabase Auth
4. **Data**: LocalStorage → Supabase Database

### Backward Compatibility

The old version (`index-enhanced.html`) still works! You can run:

```bash
# Old version (Vite)
npm run dev:vite

# New version (Next.js)
npm run dev
```

## 🚀 Next Steps

### Immediate
1. ✅ Set up Supabase project
2. ✅ Add environment variables
3. ✅ Run database migrations
4. ✅ Test authentication
5. ✅ Test bookmarks

### Short-term (Week 1-2)
- [ ] Migrate remaining components to TypeScript
- [ ] Add user profile page
- [ ] Implement project ratings
- [ ] Add comments system
- [ ] Create admin dashboard

### Medium-term (Month 1-2)
- [ ] Add real-time features
- [ ] Implement search with Algolia
- [ ] Add analytics dashboard
- [ ] Create mobile app
- [ ] Add AI features

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [React Documentation](https://react.dev)

## 🐛 Troubleshooting

### Issue: "Module not found"
**Solution**: Make sure all imports use the correct path aliases:
```typescript
import { Component } from '@/components/Component'; // ✅
import { Component } from '../components/Component'; // ❌
```

### Issue: "Supabase client not initialized"
**Solution**: Check your `.env.local` file has the correct credentials

### Issue: "Authentication not working"
**Solution**: 
1. Check Supabase dashboard for auth errors
2. Verify redirect URLs are correct
3. Check browser console for errors

### Issue: "Database queries failing"
**Solution**:
1. Check RLS policies are set up correctly
2. Verify user is authenticated
3. Check Supabase logs

## 💡 Tips

1. **Use Server Components** when possible for better performance
2. **Use Client Components** only when you need interactivity
3. **Always check authentication** before accessing protected resources
4. **Use TypeScript** for better type safety
5. **Test in incognito** to verify auth flows

## 🎉 Success!

You now have a modern, scalable architecture with:
- ✅ TypeScript for type safety
- ✅ Next.js 14 for performance
- ✅ Supabase for backend
- ✅ Authentication system
- ✅ API routes
- ✅ Database integration

Ready to build amazing features! 🚀

---

**Need help?** Check the documentation or open an issue on GitHub.
