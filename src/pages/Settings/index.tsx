import AppearanceSettings from "../../components/settings/AppearanceSettings";
import NotificationSettings from "../../components/settings/NotificationSettings";
import ProfileSettings from "../../components/settings/ProfileSettings";
import SecuritySettings from "../../components/settings/SecuritySettings";

function Settings() {
  return (
    <div className="space-y-8">
      {/* Page Header */}

      <section>
        <h1 className="text-3xl font-bold text-white">Settings</h1>

        <p className="mt-2 text-slate-400">
          Manage your profile, notifications, appearance and account security.
        </p>
      </section>

      {/* Profile */}

      <ProfileSettings />

      {/* Notifications */}

      <NotificationSettings />

      {/* Appearance */}

      <AppearanceSettings />

      {/* Security */}

      <SecuritySettings />
    </div>
  );
}

export default Settings;
