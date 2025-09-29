import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { contact } from '../../constants/Contact'

export const Route = createFileRoute('/contact/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedField(field)
      setTimeout(() => setCopiedField(null), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <div className="min-h-screen mt-15">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900  mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-600  max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, creative projects, 
            or just having a friendly chat about technology.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Email */}
          <ContactCard
            onClick={() => copyToClipboard(contact.email, 'email')}
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            }
            title="Email"
            value={contact.email}
            description="Click to copy email address"
            isCopied={copiedField === 'email'}
          />

          {/* Phone */}
          <ContactCard
            onClick={() => copyToClipboard(contact.phone, 'phone')}
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            }
            title="Phone"
            value={contact.phone}
            description="Click to copy phone number"
            isCopied={copiedField === 'phone'}
          />

          {/* LinkedIn */}
          <ContactCard
            href={contact.linkedin}
            icon={
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            }
            title="LinkedIn"
            value="benson159"
            description="Connect professionally"
          />

          {/* GitHub */}
          <ContactCard
            href={contact.github}
            icon={
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            }
            title="GitHub"
            value="Benson15912"
            description="Check out my projects"
          />
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white  rounded-lg border border-gray-200  p-8">
          <h2 className="text-2xl font-semibold text-gray-900  mb-4">
            Talk to me about your project!
          </h2>
          <p className="text-gray-600  mb-6 max-w-md mx-auto">
            I am always open to impactful and interesting projects!
            
            You can also drop me a message if you want to have a game of Dota2 haha.
          </p>
        </div>
      </div>
    </div>
  )
}

// Contact Card Component
interface ContactCardProps {
  href?: string
  onClick?: () => void
  icon: React.ReactNode
  title: string
  value: string
  description: string
  isCopied?: boolean
}

const ContactCard = ({ href, onClick, icon, title, value, description, isCopied }: ContactCardProps) => {
  const Component = href ? 'a' : 'button'
  
  return (
    <Component
      {...(href ? { 
        href, 
        target: "_blank", 
        rel: "noopener noreferrer" 
      } : { 
        onClick,
        type: "button"
      })}
      className={`block w-full text-left bg-white  rounded-lg border p-6 transition-all duration-200 group ${
        href 
          ? 'border-gray-200  hover:shadow-md hover:border-gray-300 :border-gray-600' 
          : 'border-gray-200  hover:shadow-md hover:border-gray-300 :border-gray-600 cursor-pointer'
      } ${isCopied ? 'border-green-500  bg-green-50 ' : ''}`}
    >
      <div className="flex items-start space-x-4">
        <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-200 ${
          isCopied 
            ? 'bg-green-100 ' 
            : 'bg-stone-100  group-hover:bg-stone-200 :bg-gray-600'
        }`}>
          <div className={isCopied ? 'text-green-600 ' : 'text-gray-700 '}>
            {icon}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h3 className={`text-lg font-semibold ${
              isCopied ? 'text-green-700 ' : 'text-gray-900 '
            }`}>
              {title}
            </h3>
            {isCopied && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800  ">
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Copied
              </span>
            )}
          </div>
          <p className={`font-medium mb-1 truncate ${
            isCopied ? 'text-green-600 ' : 'text-gray-700 '
          }`}>
            {value}
          </p>
          <p className={`text-sm ${
            isCopied ? 'text-green-500 ' : 'text-gray-500 '
          }`}>
            {description}
          </p>
        </div>
      </div>
    </Component>
  )
}