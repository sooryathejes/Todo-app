// src/components/Todo.js
import React, { useState } from "react";

const Todo = ({ id, text, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onUpdate(id, updatedText);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2" for="updatedText">
            Updated Text
          </label>
          <input
            id="updatedText"
            type="text"
            class="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter updated text..."
            value={updatedText}
            onChange={(e) => setUpdatedText(e.target.value)}
          />

          <button class="bg-yellow-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ms-2" onClick={handleSave}>Save</button>

        </div>
      ) : (
        <div class="flex items-center justify-between bg-gray-100 p-4 rounded shadow-md mb-4">
        <span class="text-gray-700">{text}</span>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ms-2" onClick={handleEdit}>Edit</button>
        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ms-2" onClick={() => onDelete(id)}>Delete</button>
      </div>
      
      )}
    </div>

  );
};

export default Todo;
