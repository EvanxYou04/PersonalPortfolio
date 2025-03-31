import { education } from "../constants"

const Education = () => {
    return (
        <div className="relative">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <div className="flex items-center gap-4">
                        <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center">
                            <span className="text-[#7A0019] font-bold text-lg">UMN</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white">{education?.school}</h3>
                            <p className="text-gray-300">{education?.degree}</p>
                        </div>
                    </div>
                    <span className="text-blue-400 font-semibold">{education?.period}</span>
                </div>
                
                <p className="text-gray-400 mb-4">{education?.location}</p>
                <p className="text-gray-300 mb-4">GPA: {education?.gpa}</p>
                
                <div className="mt-4">
                    <h4 className="text-gray-300 font-semibold mb-2">Relevant Coursework:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {education?.courses.map((course, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                            >
                                {course}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education
