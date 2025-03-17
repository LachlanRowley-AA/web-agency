import { useEffect } from 'react';
import { JumboTitle } from '../Jumbo-Title/jumbo-title';

export function AuthenticationForm({ noShadow, noPadding, noSubmit, style }: AuthenticationFormProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ minHeight: '65vh', backgroundColor: '#f4f4f4', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
      <Paper p="lg" shadow="xl" radius="md" style={{ backgroundColor: 'white', width: '100%', maxWidth: 800 }}>
        <Flex>
          {/* Left Side: Form */}
          <div style={{ flex: 1, paddingRight: '20px' }}>
            <JumboTitle order={3} fz="xs" ta="center" style={{ textWrap: 'balance' }} mb="sm">
              Book a Call With Our Director
            </JumboTitle>

            {/* Calendly Widget */}
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/lachlan-assetalley/30min"
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>

          {/* Right Side: Images */}
          <div style={{ flex: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ flex: 1, height: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <NextImage src='/louie.jpg' width={200} height={200} alt='Louie Dib' style={{ objectFit: 'cover', borderRadius: '100px' }} />
            </div>
            <Text style={{ textAlign: 'center', marginTop: '10px' }}>Louie Dib</Text>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
              <NextImage src='/bba.png' width={100} height={100} alt='BBA Logo'/>
            </div>
          </div>
        </Flex>
      </Paper>
    </div>
  );
}
