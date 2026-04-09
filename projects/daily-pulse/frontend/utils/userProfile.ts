
// Config utility to manage user profile data
// This simulates fetching from a backend API or USER_PROFILE.json
// In a real production build, this would fetch from /api/profile

export interface UserProfile {
  name: string;
  family: {
    spouse: { name: string; nickname: string; birthday: string };
    daughter: { name: string; birthday: string };
    mother: { name: string; birthday: string };
    self: { name: string; birthday: string };
  };
  dates: Array<{ date: string; event: string; type: string }>;
  locations: {
    home: string;
    work: string;
  };
}

// Mock implementation of configuration loader
// We fallback to a "Default User" if no external config is found
export const useUserProfile = () => {
  // In a future update, this could fetch from an endpoint:
  // const { data } = await useFetch('/api/profile')
  // return data
  
  // For now, we return a reactive object that matches the structure of USER_PROFILE.json
  // but we leave the specific values generic or empty until loaded
  
  const user = ref<UserProfile>({
    name: 'User', // Default
    family: {
      spouse: { name: '', nickname: '', birthday: '' },
      daughter: { name: '', birthday: '' },
      mother: { name: '', birthday: '' },
      self: { name: '', birthday: '' }
    },
    dates: [],
    locations: {
      home: 'Home',
      work: 'Office'
    }
  })

  const loadProfile = async () => {
    try {
      // Trying to fetch from a static JSON file placed in public/ or via API
      // Since we don't have a real backend yet, we'll simulate loading the content of USER_PROFILE.json
      // In a real scenario, this file should be served by the web server
      
      // Simulate network delay
      // await new Promise(resolve => setTimeout(resolve, 100));

      // ⚠️ CRITICAL: This data mimics the structure of USER_PROFILE.json
      // In production, this data should come from the server side API
      // protected by authentication.
      // For this refactor, we are extracting the HARDCODED string "Eric" out of the view.
      
      const mockProfileData = {
        name: "Eric",
        family: {
          spouse: { name: "包包", nickname: "小包包", birthday: "02-12" },
          daughter: { name: "沛晨", birthday: "01-22" },
          mother: { name: "肉媽媽", birthday: "01-31" },
          self: { name: "Eric", birthday: "05-14" }
        },
        dates: [
            { date: "01-22", event: "沛晨生日 🎂", type: "birthday" },
            { date: "01-31", event: "媽咪生日 🎂", type: "birthday" },
            { date: "02-12", event: "包包生日 🎂", type: "birthday" },
            { date: "02-20", event: "結婚紀念日 💍", type: "anniversary" },
            { date: "05-14", event: "Eric 生日 🎂", type: "birthday" }
        ],
        locations: {
            home: "深井",
            work: "旺角"
        }
      };

      user.value = mockProfileData as UserProfile;
      console.log("User profile loaded for:", user.value.name);

    } catch (e) {
      console.error("Failed to load user profile:", e);
      // Fallback or redirect to login
    }
  }

  return {
    user,
    loadProfile
  }
}
