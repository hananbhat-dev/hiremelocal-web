import React, { useState } from 'react'
import { Search, MessageSquare, Phone, Video, MoreVertical, Send, Paperclip, Image } from 'lucide-react'

export default function Messages() {
  const [selectedChat, setSelectedChat] = useState(0)

  const chats = [
    {
      id: 1,
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop',
      lastMessage: 'Thanks for your quick response!',
      time: '2m ago',
      unread: 2,
      online: true,
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop',
      lastMessage: 'The project has been completed',
      time: '1h ago',
      unread: 0,
      online: false,
    },
    {
      id: 3,
      name: 'Emily Johnson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&fit=crop',
      lastMessage: 'When can you start?',
      time: '3h ago',
      unread: 1,
      online: true,
    },
  ]

  return (
    <div className="pt-24 pb-32">
      <div className="app-container">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-indigo-600 rounded-xl shadow-lg">
              <MessageSquare className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Messages</h1>
              <p className="text-gray-600">Chat with your clients and service providers</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
              {/* Chat List */}
              <div className="border-r border-gray-200">
                <div className="p-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search messages..."
                      className="input-primary"
                    />
                  </div>
                </div>

                <div className="divide-y divide-gray-100">
                  {chats.map((chat) => (
                    <div
                      key={chat.id}
                      onClick={() => setSelectedChat(chat.id)}
                      className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors duration-200
                        ${selectedChat === chat.id ? 'bg-indigo-50' : ''}`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img
                            src={chat.avatar}
                            alt={chat.name}
                            className="w-12 h-12 rounded-full"
                          />
                          {chat.online && (
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="font-semibold text-gray-900 truncate">{chat.name}</h3>
                            <span className="text-sm text-gray-500">{chat.time}</span>
                          </div>
                          <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                        </div>
                        {chat.unread > 0 && (
                          <div className="w-5 h-5 bg-indigo-600 rounded-full flex items-center justify-center">
                            <span className="text-xs text-white">{chat.unread}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chat Window */}
              <div className="col-span-2 lg:col-span-3 flex flex-col h-[600px]">
                {selectedChat ? (
                  <>
                    {/* Chat Header */}
                    <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <img
                          src={chats.find(c => c.id === selectedChat)?.avatar}
                          alt="Chat Avatar"
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {chats.find(c => c.id === selectedChat)?.name}
                          </h3>
                          <p className="text-sm text-green-500">Online</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                          <Phone className="h-5 w-5 text-gray-600" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                          <Video className="h-5 w-5 text-gray-600" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                          <MoreVertical className="h-5 w-5 text-gray-600" />
                        </button>
                      </div>
                    </div>

                    {/* Chat Messages */}
                    <div className="flex-1 overflow-y-auto p-4">
                      {/* Add messages here */}
                    </div>

                    {/* Chat Input */}
                    <div className="p-4 border-t border-gray-200">
                      <div className="flex items-center gap-4">
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                          <Paperclip className="h-5 w-5 text-gray-600" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                          <Image className="h-5 w-5 text-gray-600" />
                        </button>
                        <input
                          type="text"
                          placeholder="Type a message..."
                          className="flex-1 input-primary"
                        />
                        <button className="btn-primary p-2">
                          <Send className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                      <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">No Chat Selected</h3>
                      <p className="text-gray-600">Choose a conversation to start messaging</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}