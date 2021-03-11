export type Community = {
  name: string;
  description: string;
};

export type Post = {
  communityId: string;
  userId: string;
  title: string;
  content: string;
};

export type UserProfile = {
  displayName: string;
  bio: string;
};

export type FetchStatus = "initial" | "loading" | "success" | "error";
