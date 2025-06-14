
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				matrix: {
					orange: '#FF6A00',
					'orange-glow': '#FF8533',
					'orange-light': '#FFB366',
					black: '#000000',
					'dark-gray': '#1C1C1C',
					gray: '#333333',
					'gray-light': '#444444',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'matrix-pulse': {
					'0%, 100%': {
						opacity: '0.4',
						transform: 'scale(1)'
					},
					'50%': {
						opacity: '1',
						transform: 'scale(1.05)'
					}
				},
				'matrix-glow': {
					'0%, 100%': {
						boxShadow: '0 0 5px #FF6A00, 0 0 10px #FF6A00, 0 0 15px #FF6A00'
					},
					'50%': {
						boxShadow: '0 0 10px #FF6A00, 0 0 20px #FF6A00, 0 0 30px #FF6A00'
					}
				},
				'matrix-breathe': {
					'0%, 100%': {
						transform: 'scale(1)',
						opacity: '0.8'
					},
					'50%': {
						transform: 'scale(1.02)',
						opacity: '1'
					}
				},
				'matrix-float': {
					'0%, 100%': {
						transform: 'translateY(0px) rotate(0deg)'
					},
					'33%': {
						transform: 'translateY(-8px) rotate(1deg)'
					},
					'66%': {
						transform: 'translateY(-4px) rotate(-1deg)'
					}
				},
				'matrix-slide-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(50px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'matrix-fade-in': {
					'0%': {
						opacity: '0'
					},
					'100%': {
						opacity: '1'
					}
				},
				'logo-rotate': {
					'0%': {
						transform: 'rotate(0deg) scale(1)'
					},
					'50%': {
						transform: 'rotate(180deg) scale(1.1)'
					},
					'100%': {
						transform: 'rotate(360deg) scale(1)'
					}
				},
				'particle-drift': {
					'0%': {
						transform: 'translateY(100vh) translateX(0px) scale(0)'
					},
					'10%': {
						transform: 'translateY(90vh) translateX(10px) scale(1)'
					},
					'90%': {
						transform: 'translateY(10vh) translateX(-10px) scale(1)'
					},
					'100%': {
						transform: 'translateY(-10vh) translateX(0px) scale(0)'
					}
				},
				'mirror-ripple': {
					'0%': {
						transform: 'scale(1)',
						opacity: '1'
					},
					'50%': {
						transform: 'scale(1.05)',
						opacity: '0.8'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'cinematic-entrance': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px) scale(0.95)'
					},
					'50%': {
						opacity: '0.7',
						transform: 'translateY(15px) scale(0.98)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0) scale(1)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'matrix-pulse': 'matrix-pulse 3s ease-in-out infinite',
				'matrix-glow': 'matrix-glow 2s ease-in-out infinite',
				'matrix-breathe': 'matrix-breathe 4s ease-in-out infinite',
				'matrix-float': 'matrix-float 8s ease-in-out infinite',
				'matrix-slide-up': 'matrix-slide-up 0.8s ease-out',
				'matrix-fade-in': 'matrix-fade-in 1s ease-out',
				'logo-rotate': 'logo-rotate 10s ease-in-out infinite',
				'particle-drift': 'particle-drift 15s linear infinite',
				'mirror-ripple': 'mirror-ripple 1.5s ease-in-out',
				'cinematic-entrance': 'cinematic-entrance 1.2s ease-out forwards',
			},
			fontFamily: {
				'dune': ['Orbitron', 'monospace'],
				'dune-subtitle': ['Rajdhani', 'sans-serif'],
				'dune-body': ['Exo 2', 'sans-serif'],
				'matrix': ['Orbitron', 'monospace'],
				'matrix-body': ['Exo 2', 'sans-serif'],
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
