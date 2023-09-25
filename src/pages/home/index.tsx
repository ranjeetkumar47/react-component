import React, { useEffect, useState } from 'react'
import { Cetpa, Kiwitech, ranjeetprofile } from '../../assets/image/images'
import './home.css' // Create a separate CSS file for styling
import Image from '../../shared/common/Image'
import { Link } from 'react-router-dom'

const technologiesData = [
  { name: 'JavaScript', iconColor: 'blue', iconName: 'js' },
  { name: 'TypeScript', iconColor: 'blue', iconName: 'ts' },
  { name: 'React JS', iconColor: 'blue', iconName: 'react' },
  { name: 'HTML', iconColor: 'blue', iconName: 'html5' },
  { name: 'REST API', iconColor: 'yellow', iconName: 'api' },
  { name: 'GraphQL', iconColor: 'yellow', iconName: 'graphql' },
  { name: 'Redux', iconColor: 'yellow', iconName: 'simple-icons:redux' },
  { name: 'ApolloClint', iconColor: 'yellow', iconName: 'apollo' },
  { name: 'CSS', iconColor: 'yellow', iconName: 'css3' }
  // Add more technologies and progress values here
]

const experienceData = [
  {
    company: 'Kiwi Technologies India Pvt. Ltd.',
    website: 'https://www.kiwitech.com/',
    role: 'Associate Software Engineer',
    date: 'Apr 2022 - Present',
    achievements: [
      'Front-End Development: Collaborated with senior developers to build user interfaces using React, translating design mock-ups and wireframes into interactive web applications.',
      'API Integration: Worked on integrating RESTful APIs or GraphQL endpoints into React applications, fetching and displaying dynamic data to enhance user experience.',
      'Agile Collaboration: Participated in Agile methodologies, attending stand-up meetings, and contributing to sprint planning sessions to ensure alignment with project goals, identify potential roadblocks, and facilitate continuous development and iterative improvements.',
      'Learning and Skill Development: Actively engaged in continuous learning, staying updated with the latest React trends, tools, and techniques to enhance your skills and contribute effectively to the team.'
    ]
  },
  {
    company: 'Cepta Infotech Pvt. Ltd.',
    website: 'https://www.cetpainfotech.com/',
    role: 'React JS Developer',
    date: 'Apr 2022 - Present',
    achievements: [
      'Developed a new user interface for a company using React.',
      'Improved performance and optimized rendering through techniques like lazy loading and memorization.',
      'Integrated with external APIs and backend systems to retrieve and display data in real-time.'
    ]
  }
]

const Home: React.FC = () => {
  const [progressData, setProgressData] = useState(technologiesData.map((tech) => ({ ...tech, progress: 0 })))

  // Simulate a delay for the progress bar animation
  useEffect(() => {
    const delay = 1000 // 1000ms (1 second)
    const updatedProgressData = technologiesData.map((tech) => ({
      ...tech,
      progress: tech.name === 'Redux' ? 5 : [70, 70, 80, 90, 80, 60, 75, 60, 60][technologiesData.indexOf(tech)]
    }))

    const timer = setTimeout(() => {
      setProgressData(updatedProgressData)
    }, delay)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="container mx-auto p-4 bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-between">
        <div className="pl-10">
          <Image src={ranjeetprofile} alt="Profile" className="w-32 h-32 rounded-full" />
          <div>
            <h1 className="text-2xl font-bold">Ranjeet Kumar</h1>
            <p className="text-gray-600">React Js Developer</p>
          </div>
        </div>
        <div>
          <div className="mb-8">
            <ul className="text-gray-600">
              <li className="text-xl font-semibold mb-2">
                <i className="fas fa-envelope mr-2 text-blue-500"></i>rksingh6375@gmail.com
              </li>
              <li className="text-xl font-semibold mb-2">
                <i className="fas fa-phone mr-2 text-blue-500"></i>+91 70111-64566
              </li>
              <li className="text-xl font-semibold mb-2">
                <i className="fas fa-map-marker-alt mr-2 text-blue-500"></i> 123 Main Street, City, Country
              </li>
            </ul>
            <Link
              to="https://www.linkedin.com/in/iranjeet9899/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              <i className="fab fa-linkedin"> iranjeet9899</i>
            </Link>
          </div>
          <div></div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Languages & Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {progressData.map((item) => (
            <div
              key={item.name}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg hover:scale-105 hover:border border-gray-200 transition duration-300"
            >
              <div className="flex justify-between items-center">
                <i className={`fab fa-${item.iconName} text-${item.iconColor}-400`}></i> {item.name}
                <div className="text-gray-600">{item.progress}%</div>
              </div>
              <div className="bg-gray-300 h-2 mt-1 rounded-lg">
                <div className="bg-dark-purple h-full rounded-lg" style={{ width: `${item.progress}%`, transition: 'width 1s' }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Experience</h2>
        <div className="space-y-4">
          {experienceData.map((exp, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-md">
              <div className="flex justify-between">
                <h3 className="text-lg font-semibold">{exp.company}</h3>
                <Link to={exp.website} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  <Image src={index === 0 ? Kiwitech : Cetpa} alt="Profile" className="w-40 h-10 rounded-full" />
                </Link>
              </div>
              <p className="text-gray-600 ">
                {exp.role} ({exp.date})
              </p>
              <span className="text-gray-400 text-sm">Achievements/Tasks</span>
              <ul className="list-disc list-inside">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-sm">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
