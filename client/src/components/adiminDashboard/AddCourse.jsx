import React from 'react'

function AddCourse() {
  return (
  
    <div className="max-w-md mx-auto p-9 shadow-lg hover:shadow-sky-500">
      <form  className="bg-white p-10 rounded-lg shadow-md">
        <h2 className="text-2xl font-medium mb-4">Add New Course</h2>
        <div className="mb-4">
          <label htmlFor="courseName" className="block text-gray-700 font-medium mb-2">Course Name</label>
          <input type="text" id="courseName" name="courseName" className="border border-gray-400 p-2 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="courseDescription" className="block text-gray-700 font-medium mb-2">Course Description</label>
          <textarea id="courseDescription" name="courseDescription" rows="3" className="border border-gray-400 p-2 w-full" ></textarea>
        </div>
        <button type="submit" className="bg-myblue hover:bg-sky-600 text-white font-medium py-2 px-4 rounded-lg">Add Course</button>
      </form>
    </div>
   
  )
}

export default AddCourse
