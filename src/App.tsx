import React, { useState, useEffect } from 'react';
import { MenuBar } from './components/Desktop/MenuBar';
import { DesktopGreeting } from './components/Desktop/DesktopGreeting';
import { DesktopIcons } from './components/Desktop/DesktopIcons';
import { Dock } from './components/Desktop/Dock';
import { WindowFrame } from './components/Desktop/WindowFrame';

// Windows
import { AboutWindow } from './components/Windows/AboutWindow';
import { ProjectsWindow } from './components/Windows/ProjectsWindow';
import { ExperienceWindow } from './components/Windows/ExperienceWindow';
import { SkillsWindow } from './components/Windows/SkillsWindow';
import { EducationWindow } from './components/Windows/EducationWindow';
import { CertificationsWindow } from './components/Windows/CertificationsWindow';
import { ContactWindow } from './components/Windows/ContactWindow';
import { ResumeWindow } from './components/Windows/ResumeWindow';
import { MailWindow } from './components/Windows/MailWindow';
import { ChatbotWindow } from './components/Windows/ChatbotWindow';
import { MusicBoxWindow } from './components/Windows/MusicBoxWindow';
import { PhotoViewerWindow } from './components/Windows/PhotoViewerWindow';

// Mobile
import { MobileHomeScreen } from './components/Mobile/MobileHomeScreen';
import { MobileSheet } from './components/Mobile/MobileSheet';

// Boot Loader
import { MacHelloLoader } from './components/Desktop/MacHelloLoader';

import { WindowId, WindowState } from './types';

const INITIAL_WINDOWS: Record<WindowId, WindowState> = {
  about: {
    id: 'about',
    title: 'About Me',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: 10,
    defaultPosition: { x: 120, y: 50 },
    defaultSize: { width: 680, height: 530 },
  },
  projects: {
    id: 'projects',
    title: 'Projects',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: 11,
    defaultPosition: { x: 160, y: 65 },
    defaultSize: { width: 840, height: 580 },
  },
  experience: {
    id: 'experience',
    title: 'Experience',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: 12,
    defaultPosition: { x: 200, y: 70 },
    defaultSize: { width: 740, height: 560 },
  },
  skills: {
    id: 'skills',
    title: 'Skills',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: 13,
    defaultPosition: { x: 230, y: 75 },
    defaultSize: { width: 720, height: 520 },
  },
  education: {
    id: 'education',
    title: 'Education',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: 14,
    defaultPosition: { x: 260, y: 80 },
    defaultSize: { width: 680, height: 500 },
  },
  certifications: {
    id: 'certifications',
    title: 'Achievements',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: 15,
    defaultPosition: { x: 280, y: 85 },
    defaultSize: { width: 700, height: 500 },
  },
  contact: {
    id: 'contact',
    title: 'Contact',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: 16,
    defaultPosition: { x: 300, y: 90 },
    defaultSize: { width: 640, height: 480 },
  },
  resume: {
    id: 'resume',
    title: 'Resume',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: 17,
    defaultPosition: { x: 180, y: 55 },
    defaultSize: { width: 820, height: 600 },
  },
  mail: {
    id: 'mail',
    title: 'Mail',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: 18,
    defaultPosition: { x: 320, y: 95 },
    defaultSize: { width: 660, height: 530 },
  },
  chat: {
    id: 'chat',
    title: 'Ask Bhoomi AI',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: 19,
    defaultPosition: { x: 360, y: 65 },
    defaultSize: { width: 480, height: 560 },
  },
  music: {
    id: 'music',
    title: 'Music Box',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: 20,
    defaultPosition: { x: 400, y: 70 },
    defaultSize: { width: 440, height: 600 },
  },
  photo: {
    id: 'photo',
    title: 'My Picture',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: 21,
    defaultPosition: { x: 290, y: 70 },
    defaultSize: { width: 560, height: 520 },
  },
};

export default function App() {
  const [windows, setWindows] = useState<Record<WindowId, WindowState>>(INITIAL_WINDOWS);
  const [focusedWindowId, setFocusedWindowId] = useState<WindowId | null>(null);
  const [topZIndex, setTopZIndex] = useState(25);
  const [isDark, setIsDark] = useState<boolean>(() => {
    return localStorage.getItem('bhoomi_theme') === 'dark';
  });
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [mobileActiveSheet, setMobileActiveSheet] = useState<WindowId | null>(null);

  // Responsive check
  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  // Theme synchronization with html element
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('bhoomi_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('bhoomi_theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const focusWindow = (id: WindowId) => {
    setFocusedWindowId(id);
    setTopZIndex((prev) => {
      const nextZ = prev + 1;
      setWindows((wMap) => ({
        ...wMap,
        [id]: {
          ...wMap[id],
          zIndex: nextZ,
          isMinimized: false,
        },
      }));
      return nextZ;
    });
  };

  const openApp = (id: WindowId) => {
    if (isMobile) {
      setMobileActiveSheet(id);
      return;
    }

    setWindows((prev) => {
      const nextZ = topZIndex + 1;
      setTopZIndex(nextZ);
      setFocusedWindowId(id);

      return {
        ...prev,
        [id]: {
          ...prev[id],
          isOpen: true,
          isMinimized: false,
          zIndex: nextZ,
        },
      };
    });
  };

  const closeWindow = (id: WindowId) => {
    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        isOpen: false,
        isMinimized: false,
        isMaximized: false,
      },
    }));

    if (focusedWindowId === id) {
      // Find the next highest zIndex window that is open
      const remainingOpen = (Object.keys(windows) as WindowId[]).filter(
        (key) => key !== id && windows[key].isOpen && !windows[key].isMinimized
      );
      if (remainingOpen.length > 0) {
        remainingOpen.sort((a, b) => windows[b].zIndex - windows[a].zIndex);
        setFocusedWindowId(remainingOpen[0]);
      } else {
        setFocusedWindowId(null);
      }
    }
  };

  const minimizeWindow = (id: WindowId) => {
    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        isMinimized: true,
      },
    }));

    if (focusedWindowId === id) {
      setFocusedWindowId(null);
    }
  };

  const maximizeWindow = (id: WindowId) => {
    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        isMaximized: !prev[id].isMaximized,
      },
    }));
    focusWindow(id);
  };

  const openWindowIds = (Object.keys(windows) as WindowId[]).filter(
    (key) => windows[key].isOpen
  );

  const activeAppName = focusedWindowId
    ? windows[focusedWindowId]?.title.split(':')[0].trim()
    : 'Finder';

  const renderWindowContent = (id: WindowId) => {
    switch (id) {
      case 'about':
        return <AboutWindow onOpenApp={openApp} />;
      case 'projects':
        return <ProjectsWindow />;
      case 'experience':
        return <ExperienceWindow />;
      case 'skills':
        return <SkillsWindow />;
      case 'education':
        return <EducationWindow />;
      case 'certifications':
        return <CertificationsWindow />;
      case 'contact':
        return <ContactWindow onOpenApp={openApp} />;
      case 'resume':
        return <ResumeWindow />;
      case 'mail':
        return <MailWindow />;
      case 'chat':
        return <ChatbotWindow />;
      case 'music':
        return <MusicBoxWindow />;
      case 'photo':
        return <PhotoViewerWindow />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`relative w-screen h-screen overflow-hidden ${
        isDark ? 'wallpaper-dark text-slate-100' : 'wallpaper-light text-slate-800'
      } transition-colors duration-500`}
    >
      {/* macOS Iconic "hello" boot loading screen */}
      <MacHelloLoader />

      {isMobile ? (
        /* Mobile Layout */
        <>
          <MobileHomeScreen
            onOpenApp={openApp}
            isDark={isDark}
            onToggleTheme={toggleTheme}
          />
          <MobileSheet
            id={mobileActiveSheet}
            title={mobileActiveSheet ? windows[mobileActiveSheet]?.title : ''}
            isOpen={mobileActiveSheet !== null}
            onClose={() => setMobileActiveSheet(null)}
          >
            {mobileActiveSheet && renderWindowContent(mobileActiveSheet)}
          </MobileSheet>
        </>
      ) : (
        /* Desktop Layout */
        <>
          {/* Top Menu Bar */}
          <MenuBar
            activeAppName={activeAppName}
            isDark={isDark}
            onToggleTheme={toggleTheme}
            onOpenApp={openApp}
          />

          {/* Desktop Icons */}
          <DesktopIcons onOpenApp={openApp} />

          {/* Desktop Greeting Widget */}
          <DesktopGreeting onOpenApp={openApp} />

          {/* Render All Open Windows */}
          {(Object.keys(windows) as WindowId[]).map((id) => {
            const win = windows[id];
            return (
              <WindowFrame
                key={win.id}
                id={win.id}
                title={win.title}
                isOpen={win.isOpen}
                isMinimized={win.isMinimized}
                isMaximized={win.isMaximized}
                zIndex={win.zIndex}
                isFocused={focusedWindowId === win.id}
                defaultPosition={win.defaultPosition}
                defaultWidth={win.defaultSize?.width}
                defaultHeight={win.defaultSize?.height}
                onFocus={() => focusWindow(win.id)}
                onClose={() => closeWindow(win.id)}
                onMinimize={() => minimizeWindow(win.id)}
                onMaximize={() => maximizeWindow(win.id)}
              >
                {renderWindowContent(win.id)}
              </WindowFrame>
            );
          })}

          {/* Bottom Dock */}
          <Dock openWindows={openWindowIds} onOpenApp={openApp} />
        </>
      )}
    </div>
  );
}
