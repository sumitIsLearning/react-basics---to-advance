import React from "react";
import {
  Mail,
  MapPin,
  LinkIcon,
  Facebook,
  Instagram,
  Github,
} from "lucide-react";

function UserProfileCard({ user }) {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-xl rounded-md overflow-hidden w-10/12">
      <div className="sm:flex sm:item-center px-6 py-4">
        <img
          className="block mx-auto sm:mx-0 sm:flex-shrink-0 h-20 sm:w-32 sm:h-32  rounded-full"
          src={user.avatar}
          alt={`${user.name}'s profile picture`}
        />
        <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
          <p className="text-xl font-bold text-gray-900">{user.name}</p>
          <p className="text-sm text-gray-600">{user.jobTitle}</p>
          <div className="mt-4">
            <div className="flex items-center justify-center sm:justify-start text-sm text-gray-600">
              <Mail className="h-4 w-4 mr-2" />
              {user.email}
            </div>
            <div className="mt-2 flex items-center justify-center sm:justify-start text-sm text-gray-600">
              <MapPin className="h-4 w-4 mr-2" />
              {user.location}
            </div>
            <div className="mt-2 flex items-center justify-center sm:justify-start text-sm text-gray-600">
              <LinkIcon className="h-4 w-4 mr-2" />
              {user.website}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <div className="flex justify-center space-x-4 py-4">
          <a
            href={user.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <Facebook className="h-6 w-6" />
          </a>
          <a
            href={user.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-800"
          >
            <Instagram className="h-6 w-6" />
          </a>
          <a
            href={user.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-600"
          >
            <Github className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default UserProfileCard;
