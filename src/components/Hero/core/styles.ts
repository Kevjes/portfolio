// Styles communs pour les composants Hero

export const containerStyles = {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '6rem 2rem 2rem',
  position: 'relative',
  overflow: 'hidden'
} as const;

export const contentContainerStyles = {
  maxWidth: '1200px',
  width: '100%'
} as const;

export const columnContainerStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '3rem'
} as const;

export const rowContainerStyles = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '2rem',
  flexWrap: 'wrap',
  zIndex: 10
} as const;

export const profileContainerStyles = {
  flex: '1',
  minWidth: '300px',
  padding: '2.5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  textAlign: 'left',
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '20px'
} as const;

export const expertiseContainerStyles = {
  flex: '1',
  minWidth: '300px',
  display: 'flex',
  flexDirection: 'column',
} as const;

export const scrollIndicatorStyles = {
  alignSelf: 'center',
  marginTop: '1rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.75rem',
  opacity: 0.8,
  cursor: 'pointer'
} as const;