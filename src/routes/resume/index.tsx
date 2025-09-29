import { createFileRoute } from '@tanstack/react-router'

// Path to your PDF resume in `public/` folder
const RESUME_PDF_URL = "/resume.pdf"

export const Route = createFileRoute('/resume/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="min-h-screen mt-15">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          
          
          

        {/* Education Section */}
        <section className="bg-white  rounded-lg border border-gray-200  p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-900  mb-4">Education</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium text-gray-900 ">National University of Singapore</h3>
              <p className="text-gray-600  mb-2">Bachelor of Computing in Computer Science | Aug 2022 - May 2026 (Expected)</p>
              <p className="text-gray-700  font-medium mb-3">GPA: 4.71/5.00 (First Class Honours)</p>
              <ul className="list-disc ml-5 space-y-1 text-gray-700 ">
                <li>Dean's List: AY2024/2025 Semester 2</li>
                <li>Certificate of Distinction in Artificial Intelligence Focus Area</li>
                <li>Certificate of Distinction in Database Systems Focus Area</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section className="bg-white  rounded-lg border border-gray-200  p-6">
          <h2 className="text-2xl font-semibold text-gray-900  mb-4">Technical Skills</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-900  mb-2">Programming Languages</h3>
              <p className="text-gray-700 ">Java | JavaScript | Python | SQL | C++ | HTML | CSS</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900  mb-2">Libraries/Frameworks</h3>
              <p className="text-gray-700 ">Spring Boot | Flask | React | Material UI | Scikit-learn | PyTorch</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900  mb-2">Tools</h3>
              <p className="text-gray-700 ">Git | SVN | Jira | Docker | PostgreSQL | OracleDB | Hugging Face | Postman</p>
            </div>
          </div>
        </section>

        {/* Personal Information Section */}
        <section className="bg-white  rounded-lg border border-gray-200  p-6 mt-6">
          <h2 className="text-2xl font-semibold text-gray-900  mb-4">Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium text-gray-900  mb-2">Nationality</h3>
              <p className="text-gray-700 ">Singaporean Citizen</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900  mb-2">Work Authorization</h3>
              <p className="text-gray-700 ">No work permit required</p>
            </div>
            <div className="md:col-span-2">
              <p className="text-sm text-green-600  font-medium">
                Eligible to work in Singapore without sponsorship
              </p>
            </div>
          </div>
        </section>
        {/* Download button */}
        <section className="mt-10">
            <a
            href={RESUME_PDF_URL}
            download="resume.pdf"
            className="inline-flex items-center px-6 py-3 bg-gray-900  text-white font-medium rounded-lg hover:bg-gray-800 :bg-gray-600 transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume (PDF)
          </a>
        </section>
        
      </div>
    </div>
  )
}