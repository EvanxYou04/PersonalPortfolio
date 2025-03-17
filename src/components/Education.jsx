import { education } from "../constants"
const Education = () => {
    
    return (
    <div className="grid grid-cols-1 md:grid-cols-1 items-center">
        <h3 className="text-2xl font-bold text-white">{education?.school}</h3>
        <p className="text-gray-300 leading-relaxed pl-4">
            {education?.degree}
        </p>
        <p className="text-gray-300 leading-relaxed pl-4">
            {education?.graduation}
        </p>
        <p className="text-gray-300 leading-relaxed pl-4">
            {education?.gpa}
        </p>
    </div>
  )
}

export default Education