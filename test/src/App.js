import './App.css';
// import myprofile from '../public/myprofile.jpeg'

import Resume from 'react-cv'

function App() {
  return (
    <Resume
        personalData={{
          name: 'Chanon Junpeng',
          title: 'Software Developer',
          image: 'myprofile.jpeg',
          contacts: [
            { type: 'email', value: 'chanon.ice@icloud.com' },
            { type: 'phone', value: '+66 (0)64 623 6854' },
            { type: 'location', value: 'Lampang' },
            { type: 'website', value: 'icefozen.github.io' },
            { type: 'linkedin', value: 'linkedin.com/in/chanon-junpeng' },
            // { type: 'twitter', value: 'twitter.com/404' },
            { type: 'github', value: 'github.com/icefozen' }
        ]}}
        sections= {[{
          type: 'text',
          title: 'Career Profile',
          content: 'When I was child, I always want to be a developer.',
          icon: 'usertie'
        },
        {
          type: 'common-list',
          title: 'Education',
          icon: 'graduation',
          items: [
            {
              title: 'Computer Science (BS) GPAX 3.40',
              authority: 'Thammasat University',
              authorityWebSite: 'https://tu.ac.th',
              rightSide: '2018 - 2021'
            }
          ]
        },
        {
          type: 'experiences-list',
          title: 'Experiences',
          icon: 'archive',
          items: [
            {
              title: 'SCG internship development program #19',
              company: 'Siam Cement Group (SCG)',
              description: 'I\'m working as a software developer',
              companyWebSite: 'ttps://www.scg.com',
              companyMeta: '',
              datesBetween: '2020.5 - 2020.8',
              // descriptionTags: ['Javascript', 'React']
            },
            {
              title: 'Consultants of Science and Technology Student committee',
              company: 'Science and Technology Student committee',
              description: 'I\'m working as a consult for all activities in my faculty',
              companyWebSite: 'https://www.facebook.com/Science.and.technology.tulp',
              // companyMeta: 'Little info about company',
              datesBetween: '2019 - 2020'
            },
            {
              title: 'Cheerleader of Thammasat university, Lampang campus 2018',
              company: 'Thammasat university, Lampang campus',
              // description: 'I was warming up.',
              companyWebSite: 'https://www.facebook.com/TULPCHEERLEADER/',
              // companyMeta: 'SF USA',
              datesBetween: '2018 - 2020'
            },
            {
              title: 'Director of TULP Drama club 2019',
              company: 'Thammasat university, Lampang campus',
              // description: 'I was warming up.',
              companyWebSite: 'https://www.facebook.com/TULPDRAMA/',
              // companyMeta: 'SF USA',
              datesBetween: '2019 - 2020'
            }
          ]
        },
        {
          type: 'projects-list',
          title: 'Projects',
          // description: 'Optional',
          icon: 'tasks',
          groups: [
            {
              sectionHeader: 'The ICPC International Collegiate Programming Contest',
              // description: 'Optional',
              items: [
                { title: 'The ICPC Regional Contest 2019', projectUrl: 'https://www.facebook.com/icpc.eng.chula/', description: 'Contestant' }
              ]
            },
            {
                sectionHeader: 'National Science and Technology Development Agency',
                items: [
                  { title: 'The twenty-two National Software Contest: NSC 2020', description: 'English war: Platform using online game to improve English skills for kids (Passed to the northern region round)' },
                  { title: 'The twenty-three National Software Contest: NSC 2021', description: 'Kaantip: A brain-controlled smart application to facilitate communication between deaf and individuals (Pass to final round)' }
                ]
              },
              {
                sectionHeader: 'HPC-AI Advisory Council, APAC',
                items: [
                  { title: 'The 2020 APAC HPC-AI Competition', projectUrl: 'http://www.hpcadvisorycouncil.com/events/2020/APAC-AI-HPC/', description: 'Contestant and got the 7th' }
                ]
              }
          ]
        },
        {
          type: 'common-list',
          title: 'Languages',
          icon: 'language',
          items: [
            {
              authority: 'English',
              authorityMeta: 'Immediate'
            },
            {
              authority: 'Chainese',
              authorityMeta: 'Beginner'
            }
          ]
        },
        {
          type: 'tag-list',
          title: 'Skills Proficiency',
          icon: 'rocket',
          items: ['React', 'Javascript', 'CSS3', 'HTML', 'Java', 'C', 'Python', 'Linux command']
        },
        {
          type: 'tag-list',
          title: 'Hobbies & Interests',
          icon: 'cubes',
          items: ['Photography', 'Travel']
        }
      ]}

        

        branding={false} // or false to hide it.
      />
  );
}

export default App;
