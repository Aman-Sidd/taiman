export interface UserMetadata {
    name?: string;
    picture?: string;
}

export interface SupabaseUser {
    email?: string;
    user_metadata?: UserMetadata;
}

export interface UserDetail {
    id: string;
    created_at: string;
    email: string;
    name: string | null;
    picture: string | null;
    credits: number;
}

export interface UserContextType {
    user: UserDetail | null;
    setUser: React.Dispatch<React.SetStateAction<UserDetail | null>>;
} 