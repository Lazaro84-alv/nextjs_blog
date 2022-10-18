import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://xbbbfmxsdvrfowwiwsvo.supabase.co/rest/v1/',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhiYmJmbXhzZHZyZm93d2l3c3ZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYxMDE1MDAsImV4cCI6MTk4MTY3NzUwMH0.Wjo5q0KV_V8K1XSKQ8KwHjy3o0z1A7_Zim0iv5ofeCk",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhiYmJmbXhzZHZyZm93d2l3c3ZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYxMDE1MDAsImV4cCI6MTk4MTY3NzUwMH0.Wjo5q0KV_V8K1XSKQ8KwHjy3o0z1A7_Zim0iv5ofeCk"
    }
})