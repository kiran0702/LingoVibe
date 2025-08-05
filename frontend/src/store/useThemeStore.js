import {create} from "zustand"

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("LingoVibe-theme") ||"light",
  setTheme: (theme)=> 
    {
      localStorage.setItem("LingoVibe-theme",theme);
      set({theme})
    },
 }))