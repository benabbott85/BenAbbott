import {
    Timeline,
    Container,
    YearContent,
    BodyContent,
    Section,
    Description,
   } from 'vertical-timeline-component-react';
   
   const Main = () => {
    const customTheme = {
     yearColor: '#405b73',
     lineColor: '#d0cdc4',
     dotColor: '#262626',
     borderDotColor: '#d0cdc4',
     titleColor: '#405b73',
     subtitleColor: '#bf9765',
     textColor: '#262626',
    };
   
    return (
        
        <div className='time'>
            <h2 className='timehead'>My Coding Journey</h2>
     <Timeline theme={customTheme} dateFormat='ll'>
      <Container >
       <YearContent endDate='2020/03/10' startDate='2019/12/01'  />
       <BodyContent>
        <Section  title='University of Denver Full Stack Coding Bootcamp'>
        </Section>
        <YearContent startDate='2020/04/09' currentDate/>
        <Section title='Senior Full Stack Web Development Tutor'>
         <Description className="time" text='Trilogy Education Services' />
         
        </Section>
        <YearContent startDate='2020/07/01' currentDate/>
        <Section title=' Full Stack Web Development Teaching Assistant'>
         <Description className="time" text='Trilogy Education Services' />
         
        </Section>
        <YearContent className="webpro"startDate='2021/03/01' endDate='2021/05/01'/>
        <Section className="time" title='Front End Developer'>
            <Description className="time" text='Contract'/>
         <Description className="time" text='Your Web Pro' />
         
        </Section>
       </BodyContent>
      </Container>
     </Timeline>
     </div>
    );
   };

   export default Main