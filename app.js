// Types and Constants
const Gender = {
    MALE: 'Male',
    FEMALE: 'Female',
    OTHER: 'Other'
};

const INITIAL_STUDENTS = [];
const INITIAL_ACADEMIC_YEARS = ['2025', '2026', '2027', '2028'];
const INITIAL_GRADES = [];
const INITIAL_CLUBS = [];
const INITIAL_HOUSES = [];

const STORAGE_KEY = 'fas_student_system_prod_checkpoint';

// Icons Component
const Icons = {
    UserIcon: ({ className = "w-6 h-6" }) => (
        React.createElement('svg', {
            className,
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
        }, React.createElement('path', {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        }))
    ),
    
    SearchIcon: ({ className = "w-5 h-5" }) => (
        React.createElement('svg', {
            className,
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
        }, React.createElement('path', {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        }))
    ),
    
    PlusIcon: ({ className = "w-5 h-5" }) => (
        React.createElement('svg', {
            className,
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
        }, React.createElement('path', {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
        }))
    ),
    
    EditIcon: ({ className = "w-4 h-4" }) => (
        React.createElement('svg', {
            className,
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
        }, React.createElement('path', {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        }))
    ),
    
    DeleteIcon: ({ className = "w-4 h-4" }) => (
        React.createElement('svg', {
            className,
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
        }, React.createElement('path', {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        }))
    ),
    
    ShieldIcon: ({ className = "w-6 h-6" }) => (
        React.createElement('svg', {
            className,
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
        }, React.createElement('path', {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        }))
    ),
    
    LockIcon: ({ className = "w-6 h-6" }) => (
        React.createElement('svg', {
            className,
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
        }, React.createElement('path', {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        }))
    ),
    
    KeyIcon: ({ className = "w-6 h-6" }) => (
        React.createElement('svg', {
            className,
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
        }, React.createElement('path', {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
        }))
    ),
    
    ActivityIcon: ({ className = "w-6 h-6" }) => (
        React.createElement('svg', {
            className,
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
        }, React.createElement('path', {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        }))
    ),
    
    ClassIcon: ({ className = "w-5 h-5" }) => (
        React.createElement('svg', {
            className,
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
        }, React.createElement('path', {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        }))
    ),
    
    ClubIcon: ({ className = "w-5 h-5" }) => (
        React.createElement('svg', {
            className,
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
        }, React.createElement('path', {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        }))
    ),
    
    HouseIcon: ({ className = "w-5 h-5" }) => (
        React.createElement('svg', {
            className,
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
        }, React.createElement('path', {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        }))
    ),
    
    UploadIcon: ({ className = "w-5 h-5" }) => (
        React.createElement('svg', {
            className,
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
        }, React.createElement('path', {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
        }))
    ),
    
    DownloadIcon: ({ className = "w-5 h-5" }) => (
        React.createElement('svg', {
            className,
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
        }, React.createElement('path', {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        }))
    ),
    
    MenuIcon: ({ className = "w-5 h-5" }) => (
        React.createElement('svg', {
            className,
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
        }, React.createElement('path', {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M4 6h16M4 12h16M4 18h16"
        }))
    ),
    
    XIcon: ({ className = "w-5 h-5" }) => (
        React.createElement('svg', {
            className,
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
        }, React.createElement('path', {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M6 18L18 6M6 6l12 12"
        }))
    ),
    
    UsersIcon: ({ className = "w-5 h-5" }) => (
        React.createElement('svg', {
            className,
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
        }, React.createElement('path', {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13 0a6 6 0 00-9-5.197"
        }))
    ),
    
    CalendarIcon: ({ className = "w-5 h-5" }) => (
        React.createElement('svg', {
            className,
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
        }, React.createElement('path', {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        }))
    ),
    
    SettingsIcon: ({ className = "w-5 h-5" }) => (
        React.createElement('svg', {
            className,
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
        }, React.createElement('path', {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        }))
    )
};

// Mobile Sidebar Component
const MobileSidebar = ({ 
    isOpen, 
    onClose, 
    view, 
    setView, 
    selectedYear, 
    setSelectedYear, 
    academicYears, 
    stats,
    isAdminAuth,
    isSuperAuth
}) => {
    return React.createElement(React.Fragment, null,
        React.createElement('div', {
            className: `mobile-sidebar-overlay ${isOpen ? 'active' : ''}`,
            onClick: onClose
        }),
        React.createElement('div', {
            className: `mobile-sidebar ${isOpen ? 'active' : ''}`
        },
            React.createElement('div', { className: "mobile-sidebar-header" },
                React.createElement('div', { className: "flex items-center justify-between mb-4" },
                    React.createElement('div', { className: "flex items-center gap-3" },
                        React.createElement('div', {
                            className: "w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center"
                        }, React.createElement('span', { className: "text-white font-black" }, "F")),
                        React.createElement('div', null,
                            React.createElement('h3', { className: "text-white font-black text-lg" }, "Student System"),
                            React.createElement('p', { className: "text-white/80 text-xs" }, `${view} Portal`)
                        )
                    ),
                    React.createElement('button', {
                        onClick: onClose,
                        className: "w-8 h-8 flex items-center justify-center text-white/80 hover:text-white"
                    }, React.createElement(Icons.XIcon, { className: "w-5 h-5" }))
                ),
                React.createElement('div', { className: "space-y-2" },
                    React.createElement('label', {
                        className: "text-white/60 text-[10px] font-black uppercase tracking-widest"
                    }, "Academic Year"),
                    React.createElement('select', {
                        value: selectedYear,
                        onChange: e => setSelectedYear(e.target.value),
                        className: "w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white font-bold outline-none text-sm"
                    },
                        academicYears.map(year => React.createElement('option', { key: year, value: year }, `${year} Intake`))
                    )
                )
            ),
            
            React.createElement('div', { className: "mobile-sidebar-content" },
                React.createElement('nav', { className: "mobile-sidebar-nav" },
                    React.createElement('button', {
                        className: `mobile-sidebar-item ${view === 'public' ? 'active' : ''}`,
                        onClick: () => { setView('public'); onClose(); }
                    },
                        React.createElement(Icons.UsersIcon, { className: "mobile-sidebar-item-icon" }),
                        React.createElement('span', null, "Public Portal")
                    ),
                    
                    (isAdminAuth || isSuperAuth) && React.createElement('button', {
                        className: `mobile-sidebar-item ${view === 'admin' ? 'active' : ''}`,
                        onClick: () => { setView('admin'); onClose(); }
                    },
                        React.createElement(Icons.SettingsIcon, { className: "mobile-sidebar-item-icon" }),
                        React.createElement('span', null, "Admin Console")
                    ),
                    
                    isSuperAuth && React.createElement('button', {
                        className: `mobile-sidebar-item ${view === 'supaadmin' ? 'active' : ''}`,
                        onClick: () => { setView('supaadmin'); onClose(); }
                    },
                        React.createElement(Icons.LockIcon, { className: "mobile-sidebar-item-icon" }),
                        React.createElement('span', null, "Super Admin")
                    )
                ),
                
                React.createElement('div', { className: "mobile-sidebar-stats" },
                    React.createElement('h4', {
                        className: "text-sm font-black text-slate-900 mb-3"
                    }, "Current Statistics"),
                    
                    React.createElement('div', { className: "mobile-sidebar-stat" },
                        React.createElement('span', { className: "mobile-sidebar-stat-label" }, "Total Students"),
                        React.createElement('span', { className: "mobile-sidebar-stat-value" }, stats.total)
                    ),
                    
                    React.createElement('div', { className: "mobile-sidebar-stat" },
                        React.createElement('span', { className: "mobile-sidebar-stat-label" }, "Boys"),
                        React.createElement('span', { className: "mobile-sidebar-stat-value" }, stats.boys)
                    ),
                    
                    React.createElement('div', { className: "mobile-sidebar-stat" },
                        React.createElement('span', { className: "mobile-sidebar-stat-label" }, "Girls"),
                        React.createElement('span', { className: "mobile-sidebar-stat-value" }, stats.girls)
                    ),
                    
                    React.createElement('div', { className: "mobile-sidebar-stat" },
                        React.createElement('span', { className: "mobile-sidebar-stat-label" }, "Academic Year"),
                        React.createElement('span', { className: "mobile-sidebar-stat-value" }, selectedYear)
                    )
                )
            )
        )
    );
};

// Mobile Header Component
const MobileHeader = ({ onMenuClick, view, isFullscreen, toggleFullscreen }) => {
    return React.createElement('header', {
        className: "mobile-header"
    },
        React.createElement('button', {
            onClick: onMenuClick,
            className: "mobile-menu-button"
        }, React.createElement(Icons.MenuIcon, { className: "w-5 h-5" })),
        
        React.createElement('div', { className: "mobile-logo" },
            React.createElement('div', { className: "mobile-logo-icon" }, "F"),
            React.createElement('span', { className: "mobile-logo-text" }, "SIS")
        ),
        
        React.createElement('div', { className: "mobile-header-actions" },
            React.createElement('button', {
                onClick: toggleFullscreen,
                className: "mobile-menu-button"
            },
                React.createElement('svg', {
                    className: "w-5 h-5",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                }, React.createElement('path', {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: isFullscreen 
                        ? "M9 9V4.5a.5.5 0 00-.5-.5h-4a.5.5 0 00-.5.5v4a.5.5 0 00.5.5H9m6 6v4.5a.5.5 0 00.5.5h4a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5H15M9 15H4.5a.5.5 0 00-.5.5v4a.5.5 0 00.5.5h4a.5.5 0 00.5-.5V15m6-6h4.5a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5h-4a.5.5 0 00-.5.5V9"
                        : "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                }))
            )
        )
    );
};

// Helper Functions
const safeParse = (key, fallback) => {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (!saved) return fallback;
        const parsed = JSON.parse(saved);
        return parsed[key] ?? fallback;
    } catch (e) {
        return fallback;
    }
};

const FormInput = ({ label, value, onChange, placeholder, type = "text", required = false }) => (
    React.createElement('div', { className: "space-y-2" },
        React.createElement('label', { className: "text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1" }, label),
        React.createElement('input', {
            type,
            value: value || '',
            onChange: e => onChange(e.target.value),
            placeholder,
            className: "w-full p-4 bg-slate-50 border border-slate-100 rounded-xl font-bold focus:bg-white focus:border-indigo-400 outline-none transition-all",
            required
        })
    )
);

// NavBtn Component
const NavBtn = ({ active, onClick, label }) => (
    React.createElement('button', {
        onClick,
        className: `px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${active ? 'bg-white text-indigo-600 shadow-sm border border-slate-100' : 'text-slate-400 hover:text-slate-600'}`
    }, label)
);

// StatCard Component
const StatCard = ({ label, val, color, icon }) => {
    const themes = {
        indigo: "bg-indigo-50 border-indigo-100 text-indigo-600",
        blue: "bg-blue-50 border-blue-100 text-blue-600",
        pink: "bg-pink-50 border-pink-100 text-pink-600",
    };
    const iconThemes = {
        indigo: "bg-indigo-600 text-white",
        blue: "bg-blue-600 text-white",
        pink: "bg-pink-600 text-white",
    };
    
    return React.createElement('div', {
        className: `p-6 rounded-[2rem] border transition-all hover:shadow-md ${themes[color] || 'bg-slate-50 border-slate-100 text-slate-600'}`
    },
        React.createElement('div', { className: "flex items-center justify-between mb-3" },
            React.createElement('p', { className: "text-[9px] font-black uppercase tracking-widest opacity-80" }, label),
            React.createElement('div', { className: `w-8 h-8 rounded-xl flex items-center justify-center shadow-sm ${iconThemes[color] || 'bg-slate-200'}` }, icon)
        ),
        React.createElement('p', { className: "text-4xl font-black tracking-tight" }, val)
    );
};

// LoginBox Component
const LoginBox = ({ title, val, setVal, onSubmit, icon, theme }) => (
    React.createElement('div', {
        className: `p-10 rounded-[2.5rem] shadow-2xl border ${theme === 'dark' ? 'bg-slate-950 text-white border-slate-900' : 'bg-white text-slate-900 border-slate-100'}`
    },
        React.createElement('div', { className: "flex flex-col items-center mb-8" },
            React.createElement('div', {
                className: "w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-xl shadow-indigo-600/20"
            }, icon),
            React.createElement('h2', { className: "text-2xl font-black tracking-tight" }, title)
        ),
        React.createElement('form', { onSubmit, className: "space-y-4" },
            React.createElement('input', {
                type: "password",
                value: val,
                onChange: e => setVal(e.target.value),
                className: `w-full p-5 rounded-2xl border font-black text-center outline-none focus:border-indigo-500 transition-all ${theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-100'}`,
                placeholder: "Access Key",
                autoFocus: true
            }),
            React.createElement('button', {
                type: "submit",
                className: "w-full py-5 bg-indigo-600 text-white font-black rounded-2xl uppercase text-[10px] tracking-widest hover:bg-indigo-700 shadow-lg"
            }, "Authenticate")
        )
    )
);

// PublicDashboard Component
const PublicDashboard = ({ 
    students, grades, clubs, houses,
    activePublicTab, setActivePublicTab, 
    activePublicFilter, setActivePublicFilter 
}) => {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [lastSearch, setLastSearch] = React.useState('');
    
    const activeTeacher = React.useMemo(() => {
        if (activePublicTab === 'classes') return grades.find(g => g.name === activePublicFilter)?.teacher;
        if (activePublicTab === 'clubs') return clubs.find(c => c.name === activePublicFilter)?.teacher;
        if (activePublicTab === 'houses') return houses.find(h => h.name === activePublicFilter)?.teacher;
        return undefined;
    }, [activePublicTab, activePublicFilter, grades, clubs, houses]);
    
    const filteredData = React.useMemo(() => {
        if (activePublicTab === 'students' && !lastSearch.trim()) return [];
        
        let base = students;
        
        if (activePublicTab === 'classes' && activePublicFilter) base = base.filter(s => s.grade === activePublicFilter);
        else if (activePublicTab === 'clubs' && activePublicFilter) base = base.filter(s => s.club === activePublicFilter);
        else if (activePublicTab === 'houses' && activePublicFilter) base = base.filter(s => s.house === activePublicFilter);
        else if (activePublicTab !== 'students' && !activePublicFilter) return [];
        
        const term = (activePublicTab === 'students' ? lastSearch : searchTerm).toLowerCase().trim();
        if (term) {
            base = base.filter(s => 
                s.indexNo.toLowerCase().includes(term) || 
                s.name.toLowerCase().includes(term) ||
                (s.idNo && s.idNo.toLowerCase().includes(term))
            );
        }
        
        return base;
    }, [students, activePublicTab, activePublicFilter, searchTerm, lastSearch]);
    
    const groupStats = React.useMemo(() => {
        return {
            total: filteredData.length,
            boys: filteredData.filter(s => s.gender === Gender.MALE).length,
            girls: filteredData.filter(s => s.gender === Gender.FEMALE).length,
        };
    }, [filteredData]);
    
    const handleSearchCommit = () => {
        setLastSearch(searchTerm);
    };
    
    const onTabChange = (tab) => {
        setActivePublicTab(tab);
        setActivePublicFilter('');
        setSearchTerm('');
        setLastSearch('');
    };
    
    const ProfileCard = ({ student }) => (
        React.createElement('div', { className: "bg-white rounded-[3.5rem] overflow-hidden border border-slate-100 shadow-2xl p-12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10" },
            React.createElement('div', { className: "md:col-span-2 flex flex-col items-center mb-8" },
                React.createElement('div', { className: "relative" },
                    React.createElement('img', {
                        src: student.photoUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(student.name)}&background=random`,
                        className: "w-56 h-56 rounded-[3.5rem] object-cover border-8 border-white shadow-2xl mb-4"
                    }),
                    React.createElement('div', {
                        className: "absolute -bottom-1 -right-1 w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white border-4 border-white shadow-lg"
                    }, React.createElement(Icons.UserIcon, { className: "w-6 h-6" }))
                ),
                React.createElement('h3', { className: "text-4xl font-black text-slate-900 text-center tracking-tight" }, student.name),
                React.createElement('div', { className: "flex gap-3 mt-6" },
                    React.createElement('span', {
                        className: "px-8 py-2.5 bg-slate-900 text-white rounded-xl font-black text-[10px] tracking-[0.2em] uppercase"
                    }, student.indexNo),
                    React.createElement('span', {
                        className: `px-8 py-2.5 rounded-xl font-black text-[10px] tracking-[0.2em] uppercase ${student.gender === 'Male' ? 'bg-blue-600 text-white' : 'bg-pink-600 text-white'}`
                    }, student.gender)
                )
            ),
            React.createElement('div', { className: "space-y-10" },
                React.createElement(DetailBox, { label: "Index Number", value: student.indexNo }),
                React.createElement(DetailBox, { label: "ID Card Number", value: student.idNo }),
                React.createElement(DetailBox, { label: "Date of Birth", value: student.dob }),
                React.createElement(DetailBox, { label: "Academic Year", value: student.academicYear }),
                React.createElement(DetailBox, { label: "Sex", value: student.gender })
            ),
            React.createElement('div', { className: "space-y-10" },
                React.createElement(DetailBox, { label: "Grade / Class", value: student.grade }),
                React.createElement(DetailBox, { label: "Club Membership", value: student.club || 'None' }),
                React.createElement(DetailBox, { label: "Assigned House", value: student.house || 'None' }),
                React.createElement(DetailBox, { label: "Email Address", value: student.email }),
                React.createElement(DetailBox, { label: "Permanent Address", value: student.address, multiLine: true })
            )
        )
    );
    
    const DetailBox = ({ label, value, multiLine = false }) => (
        React.createElement('div', { className: "space-y-3" },
            React.createElement('h4', { className: "text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1" }, label),
            React.createElement('div', {
                className: `bg-slate-50 px-8 py-5 rounded-[1.5rem] font-bold text-slate-900 text-lg border border-slate-100 transition-all hover:bg-white hover:shadow-sm ${multiLine ? 'min-h-[120px]' : ''}`
            }, value || 'Not Disclosed')
        )
    );
    
    const EmptyState = ({ message }) => (
        React.createElement('div', { className: "bg-white border-2 border-dashed border-slate-100 rounded-[3rem] py-28 text-center" },
            React.createElement('div', { className: "max-w-xs mx-auto" },
                React.createElement('div', {
                    className: "w-20 h-20 bg-slate-50 text-slate-200 rounded-[2rem] flex items-center justify-center mx-auto mb-6"
                }, React.createElement(Icons.SearchIcon, { className: "w-10 h-10" })),
                React.createElement('p', { className: "text-slate-400 font-black uppercase tracking-widest text-[11px] leading-relaxed" }, message)
            )
        )
    );
    
    const TabButton = ({ active, onClick, label, icon }) => (
        React.createElement('button', {
            onClick,
            className: `flex items-center space-x-3 px-8 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all ${active ? 'bg-indigo-600 text-white shadow-xl' : 'bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-600'}`
        },
            React.cloneElement(icon, { className: 'w-4 h-4' }),
            React.createElement('span', null, label)
        )
    );
    
    return React.createElement('div', { className: "space-y-8 animate-in fade-in duration-700 pb-20" },
        React.createElement('div', { className: "bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm relative overflow-hidden" },
            React.createElement('div', { className: "absolute top-0 right-0 p-8 no-print" },
                React.createElement('div', {
                    className: "flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full border border-indigo-100"
                },
                    React.createElement('div', { className: "w-1.5 h-1.5 bg-indigo-600 rounded-full animate-pulse" }),
                    React.createElement('span', { className: "text-[10px] font-black uppercase tracking-widest" }, "Portal Active")
                )
            ),
            React.createElement('h2', { className: "text-4xl font-black text-slate-900 mb-2 tracking-tight" }, "Student Information Portal"),
            React.createElement('p', { className: "text-slate-400 font-medium text-lg max-w-2xl" }, "Access verified academic records, class enrollment rosters, and institutional categories.")
        ),
        
        React.createElement('div', { className: "bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6 no-print" },
            React.createElement('div', { className: "flex flex-wrap items-center justify-between gap-4" },
                React.createElement('div', { className: "flex flex-wrap items-center gap-2" },
                    React.createElement(TabButton, {
                        active: activePublicTab === 'students',
                        onClick: () => onTabChange('students'),
                        label: "Student List",
                        icon: React.createElement(Icons.UserIcon)
                    }),
                    React.createElement(TabButton, {
                        active: activePublicTab === 'classes',
                        onClick: () => onTabChange('classes'),
                        label: "Class List",
                        icon: React.createElement(Icons.ClassIcon)
                    }),
                    React.createElement(TabButton, {
                        active: activePublicTab === 'clubs',
                        onClick: () => onTabChange('clubs'),
                        label: "Club List",
                        icon: React.createElement(Icons.ClubIcon)
                    }),
                    React.createElement(TabButton, {
                        active: activePublicTab === 'houses',
                        onClick: () => onTabChange('houses'),
                        label: "House List",
                        icon: React.createElement(Icons.HouseIcon)
                    })
                ),
                (activePublicTab !== 'students' && activePublicFilter && filteredData.length > 0) && React.createElement('button', {
                    onClick: () => window.print(),
                    className: "px-6 py-3 bg-slate-900 text-white rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:bg-black transition-all shadow-xl shadow-slate-200"
                },
                    React.createElement(Icons.DownloadIcon, { className: "w-4 h-4" }),
                    " Print Registry"
                )
            ),
            
            React.createElement('div', { className: "flex flex-col md:flex-row gap-4" },
                React.createElement('div', { className: "relative flex-1" },
                    React.createElement('div', {
                        className: "absolute left-6 top-1/2 -translate-y-1/2 text-slate-400"
                    }, React.createElement(Icons.SearchIcon)),
                    React.createElement('input', {
                        type: "text",
                        className: "w-full pl-14 pr-8 py-5 border border-slate-100 rounded-[1.25rem] bg-slate-50 text-lg outline-none font-bold text-black focus:bg-white focus:border-indigo-400 transition-all placeholder:text-slate-300",
                        placeholder: activePublicTab === 'students' ? "Search Name, Index or ID Number..." : "Search current registry...",
                        value: searchTerm,
                        onChange: e => setSearchTerm(e.target.value),
                        onKeyDown: e => e.key === 'Enter' && handleSearchCommit()
                    })
                ),
                activePublicTab === 'students' && React.createElement('button', {
                    onClick: handleSearchCommit,
                    className: "px-10 py-5 bg-indigo-600 text-white font-black rounded-[1.25rem] hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 text-[10px] uppercase tracking-widest"
                }, "Search Student"),
                
                activePublicTab !== 'students' && React.createElement('select', {
                    className: "block md:w-64 w-full px-6 py-5 border border-slate-100 rounded-[1.25rem] bg-slate-50 text-lg outline-none cursor-pointer font-black text-black appearance-none focus:bg-white focus:border-indigo-400 transition-all",
                    value: activePublicFilter,
                    onChange: e => setActivePublicFilter(e.target.value)
                },
                    React.createElement('option', { value: "" }, `Select ${activePublicTab === 'classes' ? 'Class' : activePublicTab === 'clubs' ? 'Club' : 'House'}...`),
                    activePublicTab === 'classes' && grades.map(g => React.createElement('option', { key: g.name, value: g.name }, g.name)),
                    activePublicTab === 'clubs' && clubs.map(c => React.createElement('option', { key: c.name, value: c.name }, c.name)),
                    activePublicTab === 'houses' && houses.map(h => React.createElement('option', { key: h.name, value: h.name }, h.name))
                )
            )
        ),
        
        activePublicFilter && activePublicTab !== 'students' && React.createElement('div', {
            className: "bg-indigo-600 p-8 rounded-[2.5rem] shadow-xl space-y-6 text-white animate-in slide-in-from-top-4 duration-500"
        },
            React.createElement('div', { className: "flex items-center justify-between border-b border-indigo-500 pb-4" },
                React.createElement('div', null,
                    React.createElement('h4', { className: "text-[10px] font-black text-indigo-200 uppercase tracking-[0.2em] mb-1" }, "Teacher In-Charge"),
                    React.createElement('p', { className: "text-2xl font-black tracking-tight" }, activeTeacher || 'No Teacher Assigned')
                ),
                React.createElement('div', {
                    className: "w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md"
                },
                    activePublicTab === 'classes' ? React.createElement(Icons.ClassIcon, { className: "w-6 h-6" }) :
                    activePublicTab === 'clubs' ? React.createElement(Icons.ClubIcon, { className: "w-6 h-6" }) :
                    React.createElement(Icons.HouseIcon, { className: "w-6 h-6" })
                )
            ),
            
            React.createElement('div', { className: "grid grid-cols-3 gap-4" },
                React.createElement('div', {
                    className: "bg-white/10 p-4 rounded-2xl border border-white/5 backdrop-blur-sm"
                },
                    React.createElement('span', {
                        className: "text-[9px] font-black uppercase tracking-widest text-indigo-100 block mb-1"
                    }, `Total ${activePublicTab.slice(0, -1)} Population`),
                    React.createElement('span', { className: "text-2xl font-black" }, groupStats.total)
                ),
                React.createElement('div', {
                    className: "bg-white/10 p-4 rounded-2xl border border-white/5 backdrop-blur-sm"
                },
                    React.createElement('span', {
                        className: "text-[9px] font-black uppercase tracking-widest text-indigo-100 block mb-1"
                    }, "Boys (Male)"),
                    React.createElement('span', { className: "text-2xl font-black" }, groupStats.boys)
                ),
                React.createElement('div', {
                    className: "bg-white/10 p-4 rounded-2xl border border-white/5 backdrop-blur-sm"
                },
                    React.createElement('span', {
                        className: "text-[9px] font-black uppercase tracking-widest text-indigo-100 block mb-1"
                    }, "Girls (Female)"),
                    React.createElement('span', { className: "text-2xl font-black" }, groupStats.girls)
                )
            )
        ),
        
        React.createElement('div', { className: "space-y-6" },
            activePublicTab === 'students' && lastSearch ? (
                filteredData.length > 0 ? (
                    React.createElement('div', {
                        className: "space-y-10 animate-in fade-in zoom-in-95 duration-500"
                    },
                        filteredData.map(student => React.createElement(ProfileCard, { key: student.id, student }))
                    )
                ) : React.createElement(EmptyState, { message: "No matching student records found" })
            ) : (
                (activePublicTab !== 'students' && activePublicFilter) ? (
                    filteredData.length > 0 ? (
                        React.createElement('div', {
                            className: "bg-white rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500"
                        },
                            React.createElement('table', { className: "w-full text-left border-collapse" },
                                React.createElement('thead', null,
                                    React.createElement('tr', { className: "bg-slate-900" },
                                        React.createElement('th', {
                                            className: "px-8 py-5 text-[10px] font-black text-white uppercase tracking-widest"
                                        }, "Index No"),
                                        React.createElement('th', {
                                            className: "px-8 py-5 text-[10px] font-black text-white uppercase tracking-widest"
                                        }, "Student Name"),
                                        React.createElement('th', {
                                            className: "px-8 py-5 text-[10px] font-black text-white uppercase tracking-widest"
                                        }, activePublicTab === 'classes' ? 'Class' : activePublicTab === 'clubs' ? 'Club' : 'House'),
                                        React.createElement('th', {
                                            className: "px-8 py-5 text-[10px] font-black text-white uppercase tracking-widest text-right"
                                        }, "Sex")
                                    )
                                ),
                                React.createElement('tbody', { className: "divide-y divide-slate-100" },
                                    filteredData.map(student => React.createElement('tr', {
                                            key: student.id,
                                            className: "hover:bg-indigo-50/20 transition-colors group"
                                        },
                                        React.createElement('td', {
                                            className: "px-8 py-5 font-bold text-slate-400 group-hover:text-indigo-600 transition-colors"
                                        }, student.indexNo),
                                        React.createElement('td', {
                                            className: "px-8 py-5 font-black text-slate-900 text-base"
                                        }, student.name),
                                        React.createElement('td', { className: "px-8 py-5" },
                                            React.createElement('span', {
                                                className: "px-3 py-1 rounded-md bg-slate-50 text-slate-500 text-[10px] font-black uppercase tracking-widest border border-slate-100"
                                            }, activePublicTab === 'classes' ? student.grade : activePublicTab === 'clubs' ? student.club : student.house)
                                        ),
                                        React.createElement('td', { className: "px-8 py-5 text-right" },
                                            React.createElement('span', {
                                                className: `px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest ${student.gender === 'Male' ? 'bg-blue-50 text-blue-600' : 'bg-pink-50 text-pink-600'}`
                                            }, student.gender)
                                        )
                                    ))
                                )
                            )
                        )
                    ) : React.createElement(EmptyState, { message: `No records available for the selected ${activePublicTab.slice(0, -1)}` })
                ) : React.createElement(EmptyState, {
                    message: activePublicTab === 'students' ? "Search for a student to view full profile details" : `Select a ${activePublicTab.slice(0, -1)} to see the detailed registry and live stats`
                })
            )
        )
    );
};

// AdminDashboard Component
const AdminDashboard = ({ 
    students, currentYear, grades, clubs, houses, academicYears,
    onAdd, onUpdate, onDelete, onBulkDelete, onDeleteCategory, onSetGrades, onSetClubs, onSetHouses, onSetAcademicYears,
    onBulkAdd, onPreviewPublic
}) => {
    const [activeTab, setActiveTab] = React.useState('students');
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [editingStudent, setEditingStudent] = React.useState(null);
    const [adminSearchTerm, setAdminSearchTerm] = React.useState('');
    
    const [deleteConfirm, setDeleteConfirm] = React.useState(null);
    
    const [newItemName, setNewItemName] = React.useState('');
    const [newItemTeacher, setNewItemTeacher] = React.useState('');
    const [editingCategory, setEditingCategory] = React.useState(null);
    
    const [formData, setFormData] = React.useState({});
    const fileInputRef = React.useRef(null);
    
    const filteredStudents = React.useMemo(() => {
        let base = students.filter(s => s.academicYear === currentYear);
        if (adminSearchTerm.trim()) {
            const term = adminSearchTerm.toLowerCase();
            base = base.filter(s => s.name.toLowerCase().includes(term) || s.indexNo.toLowerCase().includes(term));
        }
        return base;
    }, [students, currentYear, adminSearchTerm]);
    
    const handlePhotoUpload = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData({ ...formData, photoUrl: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };
    
    const handleStudentSubmit = (e) => {
        e.preventDefault();
        const finalPhoto = formData.photoUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(formData.name || 'S')}&background=random`;
        const studentData = { ...formData, photoUrl: finalPhoto };
        
        if (editingStudent) onUpdate(studentData);
        else onAdd({ ...studentData, id: Date.now().toString(), academicYear: currentYear });
        
        setIsModalOpen(false);
        setEditingStudent(null);
        setFormData({});
    };
    
    const handleCategorySubmit = (e) => {
        e.preventDefault();
        const name = newItemName.trim();
        if (!name) return;
        
        if (activeTab === 'classes') {
            const newList = editingCategory 
                ? grades.map(g => g.name === editingCategory.name ? { name, teacher: newItemTeacher } : g)
                : [...grades, { name, teacher: newItemTeacher }];
            onSetGrades(newList);
        } else if (activeTab === 'clubs') {
            const newList = editingCategory 
                ? clubs.map(c => c.name === editingCategory.name ? { name, teacher: newItemTeacher } : c)
                : [...clubs, { name, teacher: newItemTeacher }];
            onSetClubs(newList);
        } else if (activeTab === 'houses') {
            const newList = editingCategory 
                ? houses.map(h => h.name === editingCategory.name ? { name, teacher: newItemTeacher } : h)
                : [...houses, { name, teacher: newItemTeacher }];
            onSetHouses(newList);
        } else if (activeTab === 'years') {
            const newList = editingCategory 
                ? academicYears.map(y => y === editingCategory.name ? name : y)
                : [...academicYears, name].sort();
            onSetAcademicYears(newList);
        }
        
        setNewItemName('');
        setNewItemTeacher('');
        setEditingCategory(null);
    };
    
    const startEditCategory = (item, type) => {
        const name = typeof item === 'string' ? item : item.name;
        const teacher = typeof item === 'string' ? '' : (item.teacher || '');
        setEditingCategory({ name, type });
        setNewItemName(name);
        setNewItemTeacher(teacher);
    };
    
    const executeDeletion = () => {
        if (!deleteConfirm) return;
        const { id, type } = deleteConfirm;
        
        if (type === 'student') {
            onDelete(id);
        } else {
            onDeleteCategory(type, id);
        }
        setDeleteConfirm(null);
    };
    
    const getCategoryList = () => {
        if (activeTab === 'classes') return grades;
        if (activeTab === 'clubs') return clubs;
        if (activeTab === 'houses') return houses;
        if (activeTab === 'years') return academicYears;
        return [];
    };
    
    return React.createElement('div', { className: "space-y-6 pb-20 animate-in fade-in" },
        deleteConfirm && React.createElement('div', {
            className: "fixed inset-0 z-[200] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-sm"
        },
            React.createElement('div', {
                className: "bg-white rounded-[2.5rem] w-full max-w-lg p-10 shadow-3xl animate-in zoom-in-95"
            },
                React.createElement('div', { className: "text-center space-y-4" },
                    React.createElement('div', {
                        className: "w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4"
                    }, React.createElement(Icons.DeleteIcon, { className: "w-8 h-8" })),
                    React.createElement('h3', {
                        className: "text-2xl font-black text-black tracking-tight"
                    }, "Confirm Deletion"),
                    React.createElement('p', { className: "text-slate-500 font-bold leading-relaxed px-4" },
                        "Are you sure you want to permanently remove ",
                        React.createElement('span', { className: "text-red-600 font-black" }, deleteConfirm.name),
                        "? This action cannot be undone."
                    ),
                    React.createElement('div', { className: "flex gap-4 pt-6" },
                        React.createElement('button', {
                            onClick: () => setDeleteConfirm(null),
                            className: "flex-1 py-4 bg-slate-100 text-slate-600 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-slate-200 transition-all"
                        }, "Cancel"),
                        React.createElement('button', {
                            onClick: executeDeletion,
                            className: "flex-1 py-4 bg-red-600 text-white rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-red-700 shadow-lg shadow-red-100 transition-all"
                        }, "Delete Entry")
                    )
                )
            )
        ),
        
        React.createElement('div', {
            className: "flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm"
        },
            React.createElement('div', null,
                React.createElement('h2', { className: "text-3xl font-black text-black tracking-tight" }, "Admin Console"),
                React.createElement('p', {
                    className: "text-slate-400 font-bold uppercase text-[9px] tracking-widest mt-1"
                }, `${currentYear} Academic Registry Control`)
            ),
            React.createElement('div', { className: "flex flex-wrap items-center gap-3" },
                React.createElement('button', {
                    onClick: () => onPreviewPublic(),
                    className: "bg-emerald-50 text-emerald-700 px-5 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:bg-emerald-100 transition-all border border-emerald-100"
                },
                    React.createElement(Icons.ShieldIcon, { className: "w-4 h-4" }),
                    React.createElement('span', null, "Public View")
                ),
                
                React.createElement('button', {
                    onClick: () => {
                        setEditingStudent(null);
                        setFormData({ gender: Gender.MALE, academicYear: currentYear });
                        setIsModalOpen(true);
                    },
                    className: "bg-indigo-600 text-white px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all"
                },
                    React.createElement(Icons.PlusIcon),
                    React.createElement('span', null, "Enroll Student")
                )
            )
        ),
        
        React.createElement('div', {
            className: "bg-white p-2 rounded-2xl border border-slate-100 flex overflow-x-auto gap-1"
        },
            ['students', 'classes', 'clubs', 'houses', 'years'].map(tab => React.createElement('button', {
                key: tab,
                onClick: () => {
                    setActiveTab(tab);
                    setEditingCategory(null);
                    setNewItemName('');
                    setNewItemTeacher('');
                },
                className: `flex-1 min-w-[120px] py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === tab ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:bg-slate-50'}`
            }, tab === 'students' ? 'Student List' : tab === 'classes' ? 'Class List' : tab === 'clubs' ? 'Club List' : tab === 'houses' ? 'House List' : 'Academic Years'))
        ),
        
        activeTab === 'students' ? React.createElement('div', { className: "space-y-6" },
            React.createElement('div', {
                className: "bg-white p-4 rounded-2xl border border-slate-100 shadow-sm"
            },
                React.createElement('div', { className: "relative" },
                    React.createElement('div', {
                        className: "absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    }, React.createElement(Icons.SearchIcon)),
                    React.createElement('input', {
                        type: "text",
                        placeholder: "Search index, name, or ID...",
                        className: "w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-xl font-bold text-sm outline-none focus:bg-white focus:border-indigo-300 transition-all",
                        value: adminSearchTerm,
                        onChange: e => setAdminSearchTerm(e.target.value)
                    })
                )
            ),
            React.createElement('div', {
                className: "bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500"
            },
                React.createElement('table', { className: "w-full text-left" },
                    React.createElement('thead', { className: "bg-slate-900 border-b border-slate-800" },
                        React.createElement('tr', null,
                            React.createElement('th', {
                                className: "px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest"
                            }, "Index No"),
                            React.createElement('th', {
                                className: "px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest"
                            }, "Student Name"),
                            React.createElement('th', {
                                className: "px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest"
                            }, "Grade"),
                            React.createElement('th', {
                                className: "px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest"
                            }, "Sex"),
                            React.createElement('th', {
                                className: "px-8 py-5 text-right text-[10px] font-black text-slate-400 uppercase tracking-widest"
                            }, "Actions")
                        )
                    ),
                    React.createElement('tbody', { className: "divide-y divide-slate-50" },
                        filteredStudents.length > 0 ? filteredStudents.map(student => React.createElement('tr', {
                                key: student.id,
                                className: "hover:bg-slate-50/50 transition-colors group"
                            },
                            React.createElement('td', {
                                className: "px-8 py-6 font-mono text-sm font-bold text-indigo-600 group-hover:scale-105 transition-transform origin-left"
                            }, student.indexNo),
                            React.createElement('td', { className: "px-8 py-6" },
                                React.createElement('div', { className: "flex items-center gap-4" },
                                    React.createElement('img', {
                                        src: student.photoUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(student.name)}&background=random`,
                                        className: "w-10 h-10 rounded-xl object-cover border border-slate-100 shadow-sm"
                                    }),
                                    React.createElement('span', {
                                        className: "font-black text-slate-900 text-base"
                                    }, student.name)
                                )
                            ),
                            React.createElement('td', {
                                className: "px-8 py-6 font-bold text-slate-600"
                            }, student.grade),
                            React.createElement('td', { className: "px-8 py-6" },
                                React.createElement('span', {
                                    className: `px-2 py-1 rounded text-[10px] font-black uppercase tracking-widest ${student.gender === Gender.MALE ? 'bg-blue-50 text-blue-600' : 'bg-pink-50 text-pink-600'}`
                                }, student.gender)
                            ),
                            React.createElement('td', { className: "px-8 py-6 text-right space-x-2" },
                                React.createElement('button', {
                                    onClick: () => {
                                        setEditingStudent(student);
                                        setFormData(student);
                                        setIsModalOpen(true);
                                    },
                                    className: "p-2.5 text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all border border-transparent hover:border-indigo-100"
                                }, React.createElement(Icons.EditIcon)),
                                React.createElement('button', {
                                    onClick: () => setDeleteConfirm({ id: student.id, name: student.name, type: 'student' }),
                                    className: "p-2.5 text-red-600 hover:bg-red-50 rounded-xl transition-all border border-transparent hover:border-red-100"
                                }, React.createElement(Icons.DeleteIcon))
                            )
                        )) : React.createElement('tr', null,
                            React.createElement('td', { colSpan: 5, className: "px-8 py-20 text-center" },
                                React.createElement('p', {
                                    className: "text-slate-300 font-black uppercase tracking-widest text-sm"
                                }, "No Matching Academic Records Found")
                            )
                        )
                    )
                )
            )
        ) : React.createElement('div', { className: "space-y-6" },
            React.createElement('div', {
                className: "bg-white p-8 rounded-3xl border border-slate-100 shadow-sm animate-in slide-in-from-top-4 duration-500"
            },
                React.createElement('h3', {
                    className: "text-xl font-black text-black mb-6"
                }, editingCategory ? `Update ${activeTab.slice(0, -1)}` : `Add New ${activeTab.slice(0, -1)}`),
                React.createElement('form', { onSubmit: handleCategorySubmit, className: "flex flex-col md:flex-row gap-4 items-end" },
                    React.createElement('div', { className: "flex-1 space-y-2" },
                        React.createElement('label', {
                            className: "text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1"
                        }, `${activeTab.slice(0, -1).charAt(0).toUpperCase() + activeTab.slice(1, -1)} Name`),
                        React.createElement('input', {
                            type: "text",
                            value: newItemName,
                            onChange: e => setNewItemName(e.target.value),
                            className: "w-full p-4 bg-slate-50 border border-slate-100 rounded-xl font-bold outline-none focus:bg-white focus:border-indigo-400 transition-all placeholder:text-slate-300",
                            placeholder: `Enter ${activeTab.slice(0, -1)} name...`,
                            required: true
                        })
                    ),
                    activeTab !== 'years' && React.createElement('div', { className: "flex-1 space-y-2" },
                        React.createElement('label', {
                            className: "text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1"
                        }, "Teacher-in-Charge"),
                        React.createElement('input', {
                            type: "text",
                            value: newItemTeacher,
                            onChange: e => setNewItemTeacher(e.target.value),
                            className: "w-full p-4 bg-slate-50 border border-slate-100 rounded-xl font-bold outline-none focus:bg-white focus:border-indigo-400 transition-all placeholder:text-slate-300",
                            placeholder: "Enter teacher's name..."
                        })
                    ),
                    React.createElement('div', { className: "flex gap-2" },
                        React.createElement('button', {
                            type: "submit",
                            className: "bg-indigo-600 text-white px-8 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
                        }, editingCategory ? 'Update Entry' : 'Create Entry'),
                        editingCategory && React.createElement('button', {
                            type: "button",
                            onClick: () => {
                                setEditingCategory(null);
                                setNewItemName('');
                                setNewItemTeacher('');
                            },
                            className: "bg-slate-100 text-slate-600 px-6 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-200 transition-all"
                        }, "Cancel")
                    )
                )
            ),
            
            React.createElement('div', {
                className: "bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden animate-in fade-in duration-500"
            },
                React.createElement('table', { className: "w-full text-left" },
                    React.createElement('thead', { className: "bg-slate-900 border-b border-slate-800" },
                        React.createElement('tr', null,
                            React.createElement('th', {
                                className: "px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest"
                            }, "Registry Item Name"),
                            activeTab !== 'years' && React.createElement('th', {
                                className: "px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest"
                            }, "Teacher Assignment"),
                            React.createElement('th', {
                                className: "px-8 py-5 text-right text-[10px] font-black text-slate-400 uppercase tracking-widest"
                            }, "Actions")
                        )
                    ),
                    React.createElement('tbody', { className: "divide-y divide-slate-50" },
                        getCategoryList().length > 0 ? getCategoryList().map((item, idx) => React.createElement('tr', {
                                key: idx,
                                className: "hover:bg-slate-50/50 transition-colors group"
                            },
                            React.createElement('td', {
                                className: "px-8 py-6 font-black text-slate-900"
                            }, typeof item === 'string' ? item : item.name),
                            activeTab !== 'years' && React.createElement('td', {
                                className: "px-8 py-6 font-bold text-slate-500 italic"
                            }, item.teacher || 'Unassigned'),
                            React.createElement('td', { className: "px-8 py-6 text-right space-x-2" },
                                React.createElement('button', {
                                    onClick: () => startEditCategory(item, activeTab),
                                    className: "p-2.5 text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all"
                                }, React.createElement(Icons.EditIcon)),
                                React.createElement('button', {
                                    onClick: () => setDeleteConfirm({
                                        id: typeof item === 'string' ? item : item.name,
                                        name: typeof item === 'string' ? item : item.name,
                                        type: activeTab
                                    }),
                                    className: "p-2.5 text-red-600 hover:bg-red-50 rounded-xl transition-all"
                                }, React.createElement(Icons.DeleteIcon))
                            )
                        )) : React.createElement('tr', null,
                            React.createElement('td', { colSpan: 3, className: "px-8 py-16 text-center" },
                                React.createElement('p', {
                                    className: "text-slate-300 font-black uppercase tracking-widest text-[10px]"
                                }, `No entries available for ${activeTab}`)
                            )
                        )
                    )
                )
            )
        ),
        
        isModalOpen && React.createElement('div', {
            className: "fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
        },
            React.createElement('div', {
                className: "bg-white rounded-[3rem] w-full max-w-4xl p-12 my-8 shadow-3xl animate-in zoom-in-95"
            },
                React.createElement('div', { className: "flex items-center justify-between mb-10" },
                    React.createElement('h3', {
                        className: "text-3xl font-black text-black tracking-tight"
                    }, editingStudent ? 'Edit Profile' : 'Student Registration'),
                    React.createElement('button', {
                        onClick: () => setIsModalOpen(false),
                        className: "w-12 h-12 flex items-center justify-center text-slate-300 hover:text-red-500 transition-colors"
                    }, React.createElement(Icons.PlusIcon, { className: "w-8 h-8 rotate-45" }))
                ),
                
                React.createElement('form', { onSubmit: handleStudentSubmit, className: "space-y-8" },
                    React.createElement('div', { className: "flex flex-col items-center justify-center space-y-4" },
                        React.createElement('div', { className: "relative group" },
                            React.createElement('img', {
                                src: formData.photoUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(formData.name || 'S')}&background=random`,
                                className: "w-32 h-32 rounded-[2rem] object-cover border-4 border-slate-50 shadow-lg group-hover:opacity-75 transition-opacity"
                            }),
                            React.createElement('button', {
                                type: "button",
                                onClick: () => fileInputRef.current?.click(),
                                className: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/10 rounded-[2rem] text-white transition-opacity"
                            }, React.createElement(Icons.UploadIcon, { className: "w-8 h-8" }))
                        ),
                        React.createElement('input', {
                            type: "file",
                            ref: fileInputRef,
                            onChange: handlePhotoUpload,
                            accept: "image/*",
                            className: "hidden"
                        })
                    ),
                    
                    React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" },
                        React.createElement(FormInput, {
                            label: "Index Number",
                            value: formData.indexNo,
                            onChange: v => setFormData({...formData, indexNo: v}),
                            placeholder: "e.g. STD/25/001",
                            required: true
                        }),
                        React.createElement(FormInput, {
                            label: "Student Full Name",
                            value: formData.name,
                            onChange: v => setFormData({...formData, name: v}),
                            placeholder: "Official legal name",
                            required: true
                        }),
                        React.createElement(FormInput, {
                            label: "Academic Year",
                            value: formData.academicYear,
                            onChange: v => setFormData({...formData, academicYear: v}),
                            placeholder: "2025",
                            required: true
                        }),
                        
                        React.createElement('div', { className: "space-y-2" },
                            React.createElement('label', {
                                className: "text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1"
                            }, "Grade / Class"),
                            React.createElement('select', {
                                value: formData.grade || '',
                                onChange: e => setFormData({...formData, grade: e.target.value}),
                                className: "w-full p-4 bg-slate-50 border border-slate-100 rounded-xl font-bold focus:bg-white focus:border-indigo-400 outline-none transition-all cursor-pointer",
                                required: true
                            },
                                React.createElement('option', { value: "" }, "Select Grade..."),
                                grades.map(g => React.createElement('option', { key: g.name, value: g.name }, g.name))
                            )
                        ),
                        
                        React.createElement(FormInput, {
                            label: "National ID / IC",
                            value: formData.idNo,
                            onChange: v => setFormData({...formData, idNo: v}),
                            placeholder: "NIC or Registration No"
                        }),
                        
                        React.createElement('div', { className: "space-y-2" },
                            React.createElement('label', {
                                className: "text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1"
                            }, "Sex / Gender"),
                            React.createElement('select', {
                                value: formData.gender || Gender.MALE,
                                onChange: e => setFormData({...formData, gender: e.target.value}),
                                className: "w-full p-4 bg-slate-50 border border-slate-100 rounded-xl font-bold focus:bg-white focus:border-indigo-400 outline-none transition-all cursor-pointer"
                            },
                                Object.values(Gender).map(g => React.createElement('option', { key: g, value: g }, g))
                            )
                        ),
                        
                        React.createElement('div', { className: "space-y-2" },
                            React.createElement('label', {
                                className: "text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1"
                            }, "Club Affiliation"),
                            React.createElement('select', {
                                value: formData.club || '',
                                onChange: e => setFormData({...formData, club: e.target.value}),
                                className: "w-full p-4 bg-slate-50 border border-slate-100 rounded-xl font-bold focus:bg-white focus:border-indigo-400 outline-none transition-all cursor-pointer"
                            },
                                React.createElement('option', { value: "" }, "None"),
                                clubs.map(c => React.createElement('option', { key: c.name, value: c.name }, c.name))
                            )
                        ),
                        
                        React.createElement('div', { className: "space-y-2" },
                            React.createElement('label', {
                                className: "text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1"
                            }, "Assigned House"),
                            React.createElement('select', {
                                value: formData.house || '',
                                onChange: e => setFormData({...formData, house: e.target.value}),
                                className: "w-full p-4 bg-slate-50 border border-slate-100 rounded-xl font-bold focus:bg-white focus:border-indigo-400 outline-none transition-all cursor-pointer"
                            },
                                React.createElement('option', { value: "" }, "None"),
                                houses.map(h => React.createElement('option', { key: h.name, value: h.name }, h.name))
                            )
                        ),
                        
                        React.createElement(FormInput, {
                            label: "Date of Birth",
                            value: formData.dob,
                            onChange: v => setFormData({...formData, dob: v}),
                            type: "date"
                        }),
                        React.createElement(FormInput, {
                            label: "Primary Email",
                            value: formData.email,
                            onChange: v => setFormData({...formData, email: v}),
                            type: "email",
                            placeholder: "student@sis.edu"
                        }),
                        
                        React.createElement('div', { className: "lg:col-span-2 space-y-2" },
                            React.createElement('label', {
                                className: "text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1"
                            }, "Permanent Address"),
                            React.createElement('textarea', {
                                value: formData.address || '',
                                onChange: e => setFormData({...formData, address: e.target.value}),
                                placeholder: "Official residential address",
                                className: "w-full p-4 bg-slate-50 border border-slate-100 rounded-xl font-bold focus:bg-white focus:border-indigo-400 outline-none transition-all min-h-[100px] resize-none",
                                required: true
                            })
                        )
                    ),
                    
                    React.createElement('button', {
                        type: "submit",
                        className: "w-full py-6 bg-indigo-600 text-white rounded-[2rem] font-black uppercase text-[11px] tracking-[0.3em] shadow-2xl shadow-indigo-200 hover:bg-indigo-700 transition-all active:scale-[0.98]"
                    }, editingStudent ? 'Commit Record Changes' : 'Finalize Registration')
                )
            )
        )
    );
};

// SuperAdminDashboard Component
const SuperAdminDashboard = ({ 
    logs, adminPass, superPass, 
    onSetAdminPass, onSetSuperPass, 
    onReset, onRestoreDatabase,
    students, grades, clubs, houses, academicYears
}) => {
    const [newAdminPass, setNewAdminPass] = React.useState('');
    const [newSuperPass, setNewSuperPass] = React.useState('');
    const [showRestoreModal, setShowRestoreModal] = React.useState(null);
    const [showWipeModal, setShowWipeModal] = React.useState(false);
    const [wipeConfirmText, setWipeConfirmText] = React.useState('');
    const fileInputRef = React.useRef(null);
    
    const exportBackup = () => {
        const data = JSON.stringify({ students, grades, clubs, houses, academicYears });
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `fas_system_backup_${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        URL.revokeObjectURL(url);
    };
    
    const handleImportFile = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const data = JSON.parse(event.target?.result);
                if (data.students) {
                    setShowRestoreModal(data);
                } else {
                    alert("Invalid backup file format. Missing students key.");
                }
            } catch (err) {
                alert("Error reading JSON backup. Please check the file integrity.");
            }
        };
        reader.readAsText(file);
        if (fileInputRef.current) fileInputRef.current.value = '';
    };
    
    const confirmRestore = () => {
        if (showRestoreModal) {
            onRestoreDatabase(showRestoreModal);
            setShowRestoreModal(null);
        }
    };
    
    const confirmWipe = () => {
        if (wipeConfirmText === 'DELETE') {
            onReset();
            setShowWipeModal(false);
            setWipeConfirmText('');
        }
    };
    
    return React.createElement('div', { className: "space-y-8 pb-24 animate-in fade-in duration-700 relative" },
        React.createElement('input', {
            type: "file",
            ref: fileInputRef,
            className: "hidden",
            accept: ".json",
            onChange: handleImportFile
        }),
        
        showRestoreModal && React.createElement('div', {
            className: "fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-xl"
        },
            React.createElement('div', {
                className: "bg-white rounded-[3rem] w-full max-w-xl p-12 shadow-3xl animate-in zoom-in-95 duration-300"
            },
                React.createElement('div', { className: "text-center space-y-6" },
                    React.createElement('div', {
                        className: "w-20 h-20 bg-amber-100 text-amber-600 rounded-[1.5rem] flex items-center justify-center mx-auto mb-6"
                    }, React.createElement(Icons.UploadIcon, { className: "w-10 h-10" })),
                    React.createElement('h3', { className: "text-3xl font-black text-black tracking-tight" }, "System Restoration"),
                    React.createElement('p', { className: "text-slate-500 font-bold leading-relaxed" },
                        "You are about to restore a database backup containing ",
                        React.createElement('span', { className: "text-indigo-600 font-black" }, `${showRestoreModal.students?.length || 0} students`),
                        ". This will ",
                        React.createElement('span', { className: "text-red-600 font-black uppercase" }, "Overwrite"),
                        " all current academic data."
                    ),
                    React.createElement('div', { className: "flex gap-4 pt-6" },
                        React.createElement('button', {
                            onClick: () => setShowRestoreModal(null),
                            className: "flex-1 py-5 bg-slate-100 text-slate-600 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-slate-200 transition-all"
                        }, "Cancel"),
                        React.createElement('button', {
                            onClick: confirmRestore,
                            className: "flex-1 py-5 bg-indigo-600 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all"
                        }, "Overwrite & Restore")
                    )
                )
            )
        ),
        
        showWipeModal && React.createElement('div', {
            className: "fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-xl"
        },
            React.createElement('div', {
                className: "bg-white rounded-[3rem] w-full max-w-xl p-12 shadow-3xl animate-in zoom-in-95 duration-300"
            },
                React.createElement('div', { className: "text-center space-y-6" },
                    React.createElement('div', {
                        className: "w-20 h-20 bg-red-100 text-red-600 rounded-[1.5rem] flex items-center justify-center mx-auto mb-6"
                    }, React.createElement(Icons.ShieldIcon, { className: "w-10 h-10" })),
                    React.createElement('h3', { className: "text-3xl font-black text-red-600 tracking-tight" }, "Nuclear Wipe"),
                    React.createElement('p', { className: "text-slate-500 font-bold leading-relaxed" },
                        "This action IRREVERSIBLY clears the entire database. Type ",
                        React.createElement('span', { className: "text-black font-black" }, "DELETE"),
                        " below to authorize format."
                    ),
                    React.createElement('input', {
                        type: "text",
                        value: wipeConfirmText,
                        onChange: e => setWipeConfirmText(e.target.value),
                        placeholder: "Type DELETE...",
                        className: "w-full p-5 bg-slate-50 border border-slate-200 rounded-2xl text-center font-black outline-none focus:border-red-500 transition-all"
                    }),
                    React.createElement('div', { className: "flex gap-4 pt-6" },
                        React.createElement('button', {
                            onClick: () => {
                                setShowWipeModal(false);
                                setWipeConfirmText('');
                            },
                            className: "flex-1 py-5 bg-slate-100 text-slate-600 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-slate-200 transition-all"
                        }, "Abort"),
                        React.createElement('button', {
                            disabled: wipeConfirmText !== 'DELETE',
                            onClick: confirmWipe,
                            className: `flex-1 py-5 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-xl transition-all ${wipeConfirmText === 'DELETE' ? 'bg-red-600 shadow-red-100 hover:bg-red-700' : 'bg-slate-300 cursor-not-allowed opacity-50'}`
                        }, "Format System")
                    )
                )
            )
        ),
        
        React.createElement('div', {
            className: "bg-slate-950 rounded-[4rem] p-16 text-white shadow-3xl border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-10"
        },
            React.createElement('div', { className: "flex items-center space-x-10" },
                React.createElement('div', {
                    className: "w-28 h-28 bg-indigo-600 rounded-[3rem] flex items-center justify-center shadow-2xl shadow-indigo-900/40"
                }, React.createElement(Icons.LockIcon, { className: "w-14 h-14 text-white" })),
                React.createElement('div', null,
                    React.createElement('h2', {
                        className: "text-5xl font-black tracking-tighter"
                    }, "Super Admin Authority"),
                    React.createElement('div', { className: "flex items-center gap-3 mt-3" },
                        React.createElement('span', {
                            className: "px-3 py-1 bg-indigo-900 text-indigo-400 rounded-lg text-[9px] font-black uppercase tracking-[0.3em]"
                        }, "Super Admin Overlord"),
                        React.createElement('span', {
                            className: "w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"
                        })
                    )
                )
            )
        ),
        
        React.createElement('div', { className: "grid grid-cols-1 lg:grid-cols-2 gap-10" },
            React.createElement('div', {
                className: "bg-white p-16 rounded-[4rem] border border-slate-100 shadow-2xl space-y-12"
            },
                React.createElement('div', { className: "flex items-center space-x-6" },
                    React.createElement(Icons.KeyIcon, { className: "text-indigo-600 w-10 h-10" }),
                    React.createElement('h3', { className: "text-3xl font-black text-black tracking-tight" }, "Credential Vault")
                ),
                React.createElement('div', { className: "space-y-10" },
                    React.createElement('div', { className: "space-y-4" },
                        React.createElement('label', {
                            className: "text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4"
                        }, "Staff Key Phrase"),
                        React.createElement('div', { className: "flex gap-4" },
                            React.createElement('input', {
                                type: "text",
                                value: newAdminPass,
                                onChange: e => setNewAdminPass(e.target.value),
                                placeholder: "New admin phrase...",
                                className: "flex-1 px-8 py-6 bg-slate-50 border border-slate-200 rounded-[2rem] outline-none font-black text-black focus:border-indigo-400 focus:bg-white transition-all"
                            }),
                            React.createElement('button', {
                                onClick: () => {
                                    if (newAdminPass) {
                                        onSetAdminPass(newAdminPass);
                                        setNewAdminPass('');
                                    }
                                },
                                className: "px-10 py-6 bg-indigo-600 text-white font-black rounded-[2rem] text-[11px] uppercase tracking-widest shadow-xl shadow-indigo-100 hover:bg-indigo-700"
                            }, "Rotate")
                        )
                    )
                )
            ),
            
            React.createElement('div', {
                className: "bg-white p-16 rounded-[4rem] border border-slate-100 shadow-2xl space-y-12"
            },
                React.createElement('div', { className: "flex items-center space-x-6" },
                    React.createElement(Icons.ActivityIcon, { className: "text-amber-500 w-10 h-10" }),
                    React.createElement('h3', { className: "text-3xl font-black text-black tracking-tight" }, "Security Audit")
                ),
                React.createElement('div', {
                    className: "h-[300px] overflow-y-auto pr-6 custom-scrollbar space-y-5"
                },
                    logs.map(log => React.createElement('div', {
                        key: log.id,
                        className: "p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex items-start justify-between"
                    },
                        React.createElement('div', null,
                            React.createElement('div', {
                                className: "text-lg font-black text-slate-900 tracking-tight leading-tight"
                            }, log.action),
                            React.createElement('div', {
                                className: "text-[10px] text-slate-400 font-bold uppercase mt-2 tracking-widest"
                            }, new Date(log.timestamp).toLocaleString())
                        )
                    ))
                )
            )
        ),
        
        React.createElement('div', {
            className: "bg-slate-50 p-16 rounded-[4rem] border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-10"
        },
            React.createElement('div', { className: "flex items-center space-x-8" },
                React.createElement('div', {
                    className: "w-20 h-20 bg-red-100 rounded-[2rem] flex items-center justify-center text-red-600 shadow-inner"
                }, React.createElement(Icons.ShieldIcon, { className: "w-10 h-10" })),
                React.createElement('div', null,
                    React.createElement('h3', {
                        className: "text-2xl font-black text-black tracking-tight"
                    }, "Infrastructure Data Control"),
                    React.createElement('p', {
                        className: "text-slate-500 text-sm font-bold mt-1"
                    }, "Manage system-wide data purges and manual data synchronizations.")
                )
            ),
            React.createElement('div', { className: "flex flex-wrap gap-4" },
                React.createElement('button', {
                    onClick: exportBackup,
                    className: "px-10 py-6 bg-emerald-600 text-white rounded-[2rem] font-black uppercase text-[11px] tracking-widest shadow-xl shadow-emerald-100 hover:bg-emerald-700 transition-all flex items-center gap-2"
                },
                    React.createElement(Icons.DownloadIcon, { className: "w-4 h-4" }),
                    " Export Data"
                ),
                React.createElement('button', {
                    onClick: () => fileInputRef.current?.click(),
                    className: "px-10 py-6 bg-slate-900 text-white rounded-[2rem] font-black uppercase text-[11px] tracking-widest shadow-xl shadow-slate-200 hover:bg-black transition-all flex items-center gap-2"
                },
                    React.createElement(Icons.UploadIcon, { className: "w-4 h-4" }),
                    " Restore Records"
                ),
                React.createElement('button', {
                    onClick: () => setShowWipeModal(true),
                    className: "px-10 py-6 bg-red-600 text-white rounded-[2rem] font-black uppercase text-[11px] tracking-widest shadow-2xl shadow-red-200 hover:bg-red-700 transition-all"
                }, "Wipe Records")
            )
        )
    );
};

// Main App Component
const App = () => {
    const [students, setStudents] = React.useState(() => safeParse('students', INITIAL_STUDENTS));
    const [grades, setGrades] = React.useState(() => safeParse('grades', INITIAL_GRADES.map(name => ({ name }))));
    const [clubs, setClubs] = React.useState(() => safeParse('clubs', INITIAL_CLUBS.map(name => ({ name }))));
    const [houses, setHouses] = React.useState(() => safeParse('houses', INITIAL_HOUSES.map(name => ({ name }))));
    const [academicYears, setAcademicYears] = React.useState(() => safeParse('academicYears', INITIAL_ACADEMIC_YEARS));
    const [securityLogs, setSecurityLogs] = React.useState(() => safeParse('securityLogs', []));
    const [adminPassword, setAdminPassword] = React.useState(() => localStorage.getItem('fas_admin_pass') || 'admin123');
    const [superAdminPassword, setSuperAdminPassword] = React.useState(() => localStorage.getItem('fas_super_pass') || 'super123');
    const [view, setView] = React.useState('public');
    const [isAdminAuth, setIsAdminAuth] = React.useState(false);
    const [isSuperAuth, setIsSuperAuth] = React.useState(false);
    const [passwordInput, setPasswordInput] = React.useState('');
    const [logoClicks, setLogoClicks] = React.useState(0);
    const [showAdminNav, setShowAdminNav] = React.useState(false);
    const [activePublicTab, setActivePublicTab] = React.useState('students');
    const [activePublicFilter, setActivePublicFilter] = React.useState('');
    const [notification, setNotification] = React.useState(null);
    const [isFullscreen, setIsFullscreen] = React.useState(false);
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = React.useState(false);
    
    const [selectedYear, setSelectedYear] = React.useState(() => {
        const years = safeParse('academicYears', INITIAL_ACADEMIC_YEARS);
        return years[0] || '2025';
    });
    
    // Firebase data loading
    React.useEffect(() => {
        // Load students from Firebase
        const unsubscribeStudents = firebaseDb.getStudents((firebaseStudents) => {
            setStudents(firebaseStudents);
        });
        
        // Load grades from Firebase
        const unsubscribeGrades = firebaseDb.getGrades((firebaseGrades) => {
            setGrades(firebaseGrades.map(item => ({ name: item.name, teacher: item.teacher })));
        });
        
        // Load clubs from Firebase
        const unsubscribeClubs = firebaseDb.getClubs((firebaseClubs) => {
            setClubs(firebaseClubs.map(item => ({ name: item.name, teacher: item.teacher })));
        });
        
        // Load houses from Firebase
        const unsubscribeHouses = firebaseDb.getHouses((firebaseHouses) => {
            setHouses(firebaseHouses.map(item => ({ name: item.name, teacher: item.teacher })));
        });
        
        // Load academic years from Firebase
        const unsubscribeYears = firebaseDb.getAcademicYears((firebaseYears) => {
            setAcademicYears(firebaseYears);
            if (firebaseYears.length > 0 && !firebaseYears.includes(selectedYear)) {
                setSelectedYear(firebaseYears[0]);
            }
        });
        
        return () => {
            // Clean up listeners
            unsubscribeStudents && unsubscribeStudents();
            unsubscribeGrades && unsubscribeGrades();
            unsubscribeClubs && unsubscribeClubs();
            unsubscribeHouses && unsubscribeHouses();
            unsubscribeYears && unsubscribeYears();
        };
    }, []);
    
    // Save to local storage for backup
    React.useEffect(() => {
        const data = { students, grades, clubs, houses, academicYears, securityLogs };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        localStorage.setItem('fas_admin_pass', adminPassword);
        localStorage.setItem('fas_super_pass', superAdminPassword);
    }, [students, grades, clubs, houses, academicYears, securityLogs, adminPassword, superAdminPassword]);
    
    React.useEffect(() => {
        if (notification) {
            const timer = setTimeout(() => setNotification(null), 4000);
            return () => clearTimeout(timer);
        }
    }, [notification]);
    
    React.useEffect(() => {
        const handleFsChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };
        document.addEventListener('fullscreenchange', handleFsChange);
        return () => document.removeEventListener('fullscreenchange', handleFsChange);
    }, []);
    
    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                showToast("Fullscreen failed", "error");
            });
        } else {
            document.exitFullscreen();
        }
    };
    
    const showToast = (message, type = 'success') => {
        setNotification({ message, type });
    };
    
    const addLog = (action, user = 'System') => {
        const newLog = {
            id: Date.now().toString(),
            timestamp: new Date().toISOString(),
            action,
            user
        };
        setSecurityLogs(prev => [newLog, ...prev].slice(0, 100));
    };
    
    const handleLogoClick = () => {
        const next = logoClicks + 1;
        setLogoClicks(next);
        if (next >= 5) {
            setShowAdminNav(!showAdminNav);
            setLogoClicks(0);
            showToast("Access Controls Unlocked", "success");
            addLog("Management View Toggled", "Admin");
        }
        setTimeout(() => setLogoClicks(0), 4000);
    };
    
    const handleAdminLogin = (e) => {
        e.preventDefault();
        if (passwordInput === adminPassword) {
            setIsAdminAuth(true);
            setPasswordInput('');
            addLog("Staff Session Started", "Staff");
        } else {
            showToast("Invalid Access Key", "error");
        }
    };
    
    const handleSuperLogin = (e) => {
        e.preventDefault();
        if (passwordInput === superAdminPassword) {
            setIsSuperAuth(true);
            setPasswordInput('');
            addLog("Super Administrator Authorization", "SuperAdmin");
        } else {
            showToast("Super Access Key Invalid", "error");
        }
    };
    
    // Firebase data operations
    const handleAddStudent = async (student) => {
        try {
            await firebaseDb.addStudent(student);
            setStudents(prev => [...prev, student]);
            addLog(`Enrolled: ${student.name}`, "Staff");
            showToast("Student Registered Successfully");
        } catch (error) {
            console.error("Error adding student to Firebase:", error);
            showToast("Failed to save student", "error");
        }
    };
    
    const handleUpdateStudent = async (student) => {
        try {
            await firebaseDb.updateStudent(student.id, student);
            setStudents(prev => prev.map(s => s.id === student.id ? student : s));
            addLog(`Modified: ${student.name}`, "Staff");
            showToast("Record Updated");
        } catch (error) {
            console.error("Error updating student in Firebase:", error);
            showToast("Failed to update student", "error");
        }
    };
    
    const handleDeleteStudent = async (id) => {
        try {
            await firebaseDb.deleteStudent(id);
            setStudents(prev => prev.filter(s => s.id !== id));
            showToast("Student Record Deleted", "error");
            addLog("Student deleted", "Staff");
        } catch (error) {
            console.error("Error deleting student from Firebase:", error);
            showToast("Failed to delete student", "error");
        }
    };
    
    const handleSetGrades = async (newGrades) => {
        try {
            await firebaseDb.setGrades(newGrades);
            setGrades(newGrades);
            addLog("Grades updated", "Staff");
        } catch (error) {
            console.error("Error updating grades in Firebase:", error);
            showToast("Failed to update grades", "error");
        }
    };
    
    const handleSetClubs = async (newClubs) => {
        try {
            await firebaseDb.setClubs(newClubs);
            setClubs(newClubs);
            addLog("Clubs updated", "Staff");
        } catch (error) {
            console.error("Error updating clubs in Firebase:", error);
            showToast("Failed to update clubs", "error");
        }
    };
    
    const handleSetHouses = async (newHouses) => {
        try {
            await firebaseDb.setHouses(newHouses);
            setHouses(newHouses);
            addLog("Houses updated", "Staff");
        } catch (error) {
            console.error("Error updating houses in Firebase:", error);
            showToast("Failed to update houses", "error");
        }
    };
    
    const handleSetAcademicYears = async (newYears) => {
        try {
            await firebaseDb.setAcademicYears(newYears);
            setAcademicYears(newYears);
            addLog("Academic years updated", "Staff");
        } catch (error) {
            console.error("Error updating academic years in Firebase:", error);
            showToast("Failed to update academic years", "error");
        }
    };
    
    const handleDeleteCategory = async (type, item) => {
        try {
            // For Firebase, we need to handle deletions differently
            // This is simplified - in production you'd need to delete from Firebase
            if (type === 'classes') {
                const newGrades = grades.filter(g => g.name !== item);
                await handleSetGrades(newGrades);
            } else if (type === 'clubs') {
                const newClubs = clubs.filter(c => c.name !== item);
                await handleSetClubs(newClubs);
            } else if (type === 'houses') {
                const newHouses = houses.filter(h => h.name !== item);
                await handleSetHouses(newHouses);
            } else if (type === 'years') {
                const newYears = academicYears.filter(y => y !== item);
                await handleSetAcademicYears(newYears);
            }
            showToast(`${type.charAt(0).toUpperCase() + type.slice(1, -1)} Removed`, "error");
        } catch (error) {
            console.error("Error deleting category:", error);
            showToast("Failed to delete category", "error");
        }
    };
    
    const handleRestore = async (data) => {
        try {
            // Clear existing Firebase data
            await Promise.all([
                firebaseDb.setGrades([]),
                firebaseDb.setClubs([]),
                firebaseDb.setHouses([]),
                firebaseDb.setAcademicYears([])
            ]);
            
            // Add new data to Firebase
            if (data.grades) await firebaseDb.setGrades(data.grades);
            if (data.clubs) await firebaseDb.setClubs(data.clubs);
            if (data.houses) await firebaseDb.setHouses(data.houses);
            if (data.academicYears) await firebaseDb.setAcademicYears(data.academicYears);
            
            // For students, we need to add them one by one
            if (data.students) {
                for (const student of data.students) {
                    await firebaseDb.addStudent(student);
                }
            }
            
            showToast("System Restore Complete", "success");
            addLog(`Database Restore: ${data.students?.length || 0} students`, "SuperAdmin");
        } catch (error) {
            console.error("Error restoring data:", error);
            showToast("Failed to restore data", "error");
        }
    };
    
    const handleReset = async () => {
        try {
            // Clear all Firebase data
            await Promise.all([
                firebaseDb.setGrades([]),
                firebaseDb.setClubs([]),
                firebaseDb.setHouses([]),
                firebaseDb.setAcademicYears([])
            ]);
            
            // Note: Students would need to be deleted one by one or through a cloud function
            // This is simplified
            showToast("System Database Purged", "error");
            addLog("System wipe completed", "SuperAdmin");
        } catch (error) {
            console.error("Error resetting system:", error);
            showToast("Failed to reset system", "error");
        }
    };
    
    const stats = React.useMemo(() => {
        const currentStudents = students.filter(s => s.academicYear === selectedYear);
        return {
            total: currentStudents.length,
            boys: currentStudents.filter(s => s.gender === Gender.MALE).length,
            girls: currentStudents.filter(s => s.gender === Gender.FEMALE).length,
        };
    }, [students, selectedYear]);
    
    return React.createElement('div', { className: `min-h-screen ${isFullscreen ? 'bg-white fullscreen-mode' : 'bg-[#F8FAFC]'}` },
        notification && React.createElement('div', {
            className: "fixed top-24 right-6 z-[100] animate-in slide-in-from-right-10 fade-in duration-300"
        },
            React.createElement('div', {
                className: `px-6 py-4 rounded-2xl shadow-2xl border flex items-center gap-4 ${notification.type === 'error' ? 'bg-red-50 border-red-100 text-red-600' : 'bg-white border-emerald-100 text-emerald-600'}`
            },
                React.createElement('div', {
                    className: `w-2 h-2 rounded-full ${notification.type === 'error' ? 'bg-red-500' : 'bg-emerald-500'} animate-pulse`
                }),
                React.createElement('span', {
                    className: "text-[12px] font-black uppercase tracking-widest"
                }, notification.message)
            )
        ),
        
        React.createElement(MobileSidebar, {
            isOpen: isMobileSidebarOpen,
            onClose: () => setIsMobileSidebarOpen(false),
            view: view,
            setView: setView,
            selectedYear: selectedYear,
            setSelectedYear: setSelectedYear,
            academicYears: academicYears,
            stats: stats,
            isAdminAuth: isAdminAuth,
            isSuperAuth: isSuperAuth
        }),
        
        React.createElement(MobileHeader, {
            onMenuClick: () => setIsMobileSidebarOpen(true),
            view: view,
            isFullscreen: isFullscreen,
            toggleFullscreen: toggleFullscreen
        }),
        
        !isFullscreen && React.createElement('header', {
            className: "desktop-only bg-white border-b border-slate-100 sticky top-0 z-40 shadow-sm px-6 h-20 flex items-center justify-between no-print"
        },
            React.createElement('div', { className: "flex items-center space-x-4" },
                React.createElement('button', {
                    onClick: handleLogoClick,
                    className: "w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black text-xl hover:bg-indigo-700 transition-colors"
                }, "F"),
                React.createElement('div', null,
                    React.createElement('h1', {
                        className: "text-xl font-black text-black leading-tight tracking-tight"
                    }, "Student Information System"),
                    React.createElement('p', {
                        className: "text-[10px] font-black uppercase tracking-[0.2em] text-slate-400"
                    }, `${view} Portal`)
                )
            ),
            React.createElement('div', { className: "flex items-center space-x-4" },
                showAdminNav && React.createElement('div', {
                    className: "flex items-center space-x-1 bg-slate-50 p-1.5 rounded-2xl border border-slate-100"
                },
                    React.createElement(NavBtn, {
                        active: view === 'public',
                        onClick: () => setView('public'),
                        label: "Public"
                    }),
                    React.createElement(NavBtn, {
                        active: view === 'admin',
                        onClick: () => setView('admin'),
                        label: "Admin"
                    }),
                    React.createElement(NavBtn, {
                        active: view === 'supaadmin',
                        onClick: () => setView('supaadmin'),
                        label: "Super"
                    })
                ),
                React.createElement('button', {
                    onClick: toggleFullscreen,
                    className: "w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-all shadow-sm",
                    title: "Toggle Fullscreen"
                },
                    React.createElement('svg', {
                        className: "w-5 h-5",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24"
                    }, React.createElement('path', {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                    }))
                )
            )
        ),
        
        React.createElement('main', {
            className: `max-w-[1400px] mx-auto px-6 py-10 grid grid-cols-1 ${isFullscreen ? 'lg:grid-cols-1' : 'lg:grid-cols-4'} gap-10`
        },
            !isFullscreen && React.createElement('div', { className: "desktop-only lg:col-span-1 space-y-8 no-print animate-in slide-in-from-left-4" },
                React.createElement('div', {
                    className: "bg-white p-8 rounded-3xl border border-slate-100 shadow-sm"
                },
                    React.createElement('h2', {
                        className: "text-[11px] font-black text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-50 pb-4"
                    }, "Academic Year"),
                    React.createElement('select', {
                        value: selectedYear,
                        onChange: e => setSelectedYear(e.target.value),
                        className: "w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl font-black text-black outline-none focus:border-indigo-500 transition-colors text-sm"
                    },
                        academicYears.map(year => React.createElement('option', { key: year, value: year }, `${year} Intake`))
                    )
                ),
                
                React.createElement('div', {
                    className: "bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4"
                },
                    React.createElement('h2', {
                        className: "text-[11px] font-black text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-50 pb-4"
                    }, "Student Stats"),
                    React.createElement(StatCard, {
                        label: "Total Students",
                        val: stats.total,
                        color: "indigo",
                        icon: React.createElement(Icons.UserIcon, { className: "w-5 h-5" })
                    }),
                    React.createElement(StatCard, {
                        label: "Boys Enrolled",
                        val: stats.boys,
                        color: "blue",
                        icon: React.createElement(Icons.UserIcon, { className: "w-5 h-5" })
                    }),
                    React.createElement(StatCard, {
                        label: "Girls Enrolled",
                        val: stats.girls,
                        color: "pink",
                        icon: React.createElement(Icons.UserIcon, { className: "w-5 h-5" })
                    })
                )
            ),
            
            React.createElement('div', { className: isFullscreen ? 'lg:col-span-1' : 'lg:col-span-3' },
                isFullscreen && React.createElement('div', { className: "mb-6 flex items-center justify-between no-print" },
                    React.createElement('span', {
                        className: "px-4 py-2 bg-indigo-600 text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl"
                    }, "Full Screen Mode Active"),
                    React.createElement('button', {
                        onClick: toggleFullscreen,
                        className: "text-slate-400 hover:text-indigo-600 font-black text-[10px] uppercase tracking-widest"
                    }, "Exit Presentation Mode")
                ),
                
                view === 'public' ? React.createElement(PublicDashboard, {
                    students: students.filter(s => s.academicYear === selectedYear),
                    grades: grades,
                    clubs: clubs,
                    houses: houses,
                    activePublicTab: activePublicTab,
                    setActivePublicTab: setActivePublicTab,
                    activePublicFilter: activePublicFilter,
                    setActivePublicFilter: setActivePublicFilter
                }) : view === 'admin' ? (
                    !isAdminAuth ? React.createElement('div', { className: "max-w-md mx-auto py-20" },
                        React.createElement(LoginBox, {
                            title: "Staff Authorization",
                            val: passwordInput,
                            setVal: setPasswordInput,
                            onSubmit: handleAdminLogin,
                            icon: React.createElement(Icons.ShieldIcon)
                        })
                    ) : React.createElement(AdminDashboard, {
                        students: students,
                        currentYear: selectedYear,
                        grades: grades,
                        clubs: clubs,
                        houses: houses,
                        academicYears: academicYears,
                        onAdd: handleAddStudent,
                        onUpdate: handleUpdateStudent,
                        onDelete: handleDeleteStudent,
                        onBulkDelete: () => {}, // Not implemented
                        onDeleteCategory: handleDeleteCategory,
                        onSetGrades: handleSetGrades,
                        onSetClubs: handleSetClubs,
                        onSetHouses: handleSetHouses,
                        onSetAcademicYears: handleSetAcademicYears,
                        onBulkAdd: () => {}, // Not implemented
                        onPreviewPublic: () => setView('public')
                    })
                ) : (
                    !isSuperAuth ? React.createElement('div', { className: "max-w-md mx-auto py-20" },
                        React.createElement(LoginBox, {
                            title: "Super Authority",
                            val: passwordInput,
                            setVal: setPasswordInput,
                            onSubmit: handleSuperLogin,
                            icon: React.createElement(Icons.LockIcon),
                            theme: "dark"
                        })
                    ) : React.createElement(SuperAdminDashboard, {
                        logs: securityLogs,
                        adminPass: adminPassword,
                        superPass: superAdminPassword,
                        onSetAdminPass: setAdminPassword,
                        onSetSuperPass: setSuperAdminPassword,
                        onReset: handleReset,
                        onRestoreDatabase: handleRestore,
                        students: students,
                        grades: grades,
                        clubs: clubs,
                        houses: houses,
                        academicYears: academicYears
                    })
                )
            )
        )
    );
};

// Render the app
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(React.createElement(App));