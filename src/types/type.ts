export type TAppData = {
  FACEBOOK_URL?: string;
  GITHUB_URL?: string;
  LINKEDIN_URL?: string;
  INSTAGRAM_URL?: string;
  TWITTER_URL?: string;
  GMAIL_URL?: string;
  PHONE_NUMBER?: string;
  ADDRESS?: string;
  CV_URL?: string;
 }

export interface IDeveloper {
  name?: string;
  education?: string;
  position?: string;
  skills: string[];
  hardWorker?: boolean;
  quickLearner?: boolean;
  problemSolver?: boolean;
  availableForWork?: boolean;
}

export type TExpCard = {
  time?:string;
  title?: string;
  platform?: string[];
  desc?: string;
}

export type TProjectCard = {
  imageUrl?: string;
  title?: string;
  tech?: string[];
  desc: string;
  githubUrl?: string;
  demoUrl?: string;
}