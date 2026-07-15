export interface UserProfile {
  name: string;
  email: string;
  jobTitle: string;
}

export interface NotificationPreferences {
  emailNotifications: boolean;
  pushNotifications: boolean;
  smsNotifications: boolean;
}

export interface AppearancePreferences {
  theme: "Dark" | "Light";
  compactMode: boolean;
}

export interface SecurityPreferences {
  twoFactorAuthentication: boolean;
}

export interface AppSettings {
  profile: UserProfile;
  notifications: NotificationPreferences;
  appearance: AppearancePreferences;
  security: SecurityPreferences;
}

export const defaultSettings: AppSettings = {
  profile: {
    name: "Chukwuemeka Ugochukwu",
    email: "emeka@example.com",
    jobTitle: "Frontend Developer",
  },

  notifications: {
    emailNotifications: true,
    pushNotifications: true,
    smsNotifications: false,
  },

  appearance: {
    theme: "Dark",
    compactMode: false,
  },

  security: {
    twoFactorAuthentication: false,
  },
};
