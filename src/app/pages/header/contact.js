
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import {Send, X } from "lucide-react";
import Image from 'next/image';

const WhatsComponent = () => {
    const messages = [
        "تواصل معنا الآن!",
        "هل لديك استفسار ؟",
    ]; 
    
    const DISPLAY_DURATION = 4000; 
    const HIDE_DURATION = 15000;

    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let displayTimer;
        let hideTimer;
        
        const cycleMessage = () => {
            setIsVisible(true);
            
            displayTimer = setTimeout(() => {
                setIsVisible(false);
                
                const nextIndex = (currentMessageIndex + 1) % messages.length;
                setCurrentMessageIndex(nextIndex);

                hideTimer = setTimeout(cycleMessage, HIDE_DURATION);
            }, DISPLAY_DURATION);
        };

        hideTimer = setTimeout(cycleMessage, 2000); 

        return () => {
            clearTimeout(displayTimer);
            clearTimeout(hideTimer);
        };
    }, [currentMessageIndex]);

    return (
        
        <div className="fixed bottom-5 right-5 z-50"> 
            {isVisible && (
                <div className="absolute right-16 bottom-2 p-2 bg-white text-[#322b83] rounded-lg shadow-xl w-max transition-opacity duration-300 transform scale-100 origin-bottom-right">
                    <p className="text-sm font-semibold">{messages[currentMessageIndex]}</p>
                </div>
            )}
            <div className="bg-[#322b83] w-14 h-14 rounded-full flex justify-center items-center hover:scale-110 transition-all duration-300">
                <a href="https://wa.me/966555144382" target="_blank" rel="noopener noreferrer">
                  
                    <FaWhatsapp className="text-white cursor-pointer text-3xl md:text-4xl lg:text-4xl font-bold"/>
                </a>
            </div>
        </div>
    );
};


const TadbeerChatbotComponent = ({ isOpen, setIsOpen }) => {

    const message = [
        " تحدث مع تدبير المتخصصة",
    ]; 
    
    const DISPLAY_DURATION = 4000; 
    const HIDE_DURATION = 5000;

    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let displayTimer;
        let hideTimer;
        
        const cycleMessage = () => {
            setIsVisible(true);
            
            displayTimer = setTimeout(() => {
                setIsVisible(false);
                
                const nextIndex = (currentMessageIndex + 1) % message.length;
                setCurrentMessageIndex(nextIndex);

                hideTimer = setTimeout(cycleMessage, HIDE_DURATION);
            }, DISPLAY_DURATION);
        };

        // يبدأ دورة الرسائل بعد 3 ثوانٍ
        hideTimer = setTimeout(cycleMessage, 3000); 

        return () => {
            clearTimeout(displayTimer);
            clearTimeout(hideTimer);
        };
    }, [currentMessageIndex]);

    // منطق الشات بوت الرئيسي
    const [messages, setMessages] = useState([
        {
            type: 'bot',
            text: 'مرحباً بك في شركة تدبير المتخصصة 👋\n\nكيف يمكنني مساعدتك اليوم؟',
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef(null);

    const quickReplies = [
        { id: 1, text: 'خدمات الشركة', icon: '💼' },
        { id: 2, text: 'الاستشارات المالية', icon: '💰' },
        { id: 3, text: 'تطوير الأعمال', icon: '📈' },
        { id: 4, text: 'التواصل معنا', icon: '📞' },
    ];

    const responses = {
        'خدمات الشركة': 'نحن نقدم خدمات متخصصة في:\n\n• الاستشارات المالية والمهنية\n• تطوير التجارة والأعمال\n• التخطيط الاستراتيجي\n• إدارة المشاريع\n• الاستشارات الإدارية\n\nهل تريد معرفة تفاصيل أكثر عن خدمة معينة؟',
        
        'الاستشارات المالية': 'خدمات الاستشارات المالية تشمل:\n\n• التخطيط المالي الاستراتيجي\n• تحليل الجدوى الاقتصادية\n• إدارة التدفقات النقدية\n• الاستشارات الضريبية\n• إعداد الميزانيات\n\nللحصول على استشارة مخصصة، يمكنك التواصل معنا مباشرة.',
        
        'تطوير الأعمال': 'نساعدك في تطوير أعمالك من خلال:\n\n• دراسة السوق والمنافسين\n• تطوير نماذج الأعمال\n• استراتيجيات النمو والتوسع\n• تحسين العمليات التشغيلية\n• إدارة التغيير المؤسسي\n\nهل تريد حجز موعد لمناقشة احتياجاتك؟',
        
        'التواصل معنا': 'يسعدنا تواصلك معنا:\n\n📧 البريد الإلكتروني: info@tadbeer.com\n📱 الهاتف: +966 XX XXX XXXX\n🏢 العنوان: السعودية\n⏰ مواعيد العمل: الأحد - الخميس (9 صباحاً - 5 مساءً)\n\nيمكنك أيضاً زيارة موقعنا للمزيد من المعلومات.',
        
        'default': 'شكراً لتواصلك! 😊\n\nللحصول على مساعدة أفضل، يمكنك:\n• اختيار أحد الخيارات أدناه\n• التواصل معنا مباشرة\n• زيارة موقعنا الإلكتروني\n\nفريقنا جاهز لخدمتك!'
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = (text) => {
        if (!text.trim()) return;

        const userMessage = {
            type: 'user',
            text: text,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');

        setTimeout(() => {
            const botResponse = {
                type: 'bot',
                text: responses[text] || responses['default'],
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botResponse]);
        }, 800);
    };

    const handleQuickReply = (reply) => {
        handleSendMessage(reply.text);
    };


    return (
        <div className="font-['Cairo',sans-serif]" dir="rtl">

            {isVisible && !isOpen && (
                <div 
                    className="fixed bottom-24 right-6 z-50 w-max transition-all duration-500"
                    dir="rtl"
                >
                    <div 
                        className="mt-4 p-4 pt-6 bg-white border-4 rounded-3xl shadow-2xl transition-opacity duration-300 origin-bottom-left w-[280px]"
                        style={{ 
                            borderColor: '#5C33F6', 
                            boxShadow: '0 10px 15px -3px rgba(92, 51, 246, 0.4), 0 4px 6px -2px rgba(92, 51, 246, 0.1), 0 0 0 4px rgba(92, 51, 246, 0.1)'
                        }}
                    >
                        <p className="text-sm text-center font-medium text-gray-800 leading-relaxed">
                            <span className="ml-1">👋</span> <span className="inline font-bold text-[#322b83]">{message[currentMessageIndex]}</span>
                            <br />
                            <span className="text-xs text-gray-500 mt-2 block pt-2 border-t border-gray-100">
                                أنا مساعد تدبير الذكي، هنا لمساعدتك في العثور على طريقك.
                            </span>
                        </p>
                    </div>
                </div>
            )}

            {/* زر فتح الشات بوت (Toggle Button) */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true) && setIsShowingWhatsapp(false)}
                    className="fixed bottom-6 right-6 bg-gradient-to-br from-[#2d3561] to-[#1a1f3a] text-white rounded-full p-4 shadow-2xl hover:scale-110 transition-all duration-300 z-50 group"
                    aria-label="فتح المحادثة"
                >
                    <TiMessages size={28} className="group-hover:rotate-12 transition-transform" />
                    <span className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
                        1
                    </span>
                </button>
            )}

            {isOpen && (
                <div className="fixed bottom-6 right-3 w-full max-w-[300px] md:max-w-[400px] h-[500px] md:h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden border border-gray-200">
                    
                    {/* Header */}
                    <div className="bg-gradient-to-r from-[#2d3561] to-[#1a1f3a] text-white p-4 flex items-center justify-between rounded-t-2xl">
                        <div className="flex items-center gap-3">
                            <div className=" bg-[#2d3561] rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                                <Image src="/logo2.jpeg" width={50} height={50} alt="Logo" className="object-center rounded-full" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">شركة تدبير المتخصصة</h3>
                                <p className="text-xs text-gray-300 flex items-center gap-1">
                                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                    متاح الآن
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white hover:bg-white/20 rounded-full p-2 transition-all"
                            aria-label="إغلاق المحادثة"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 bg-gradient-to-b from-gray-50 to-white">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`mb-4 flex ${message.type === 'user' ? 'justify-start' : 'justify-end'}`}
                            >
                                <div
                                    className={`max-w-[80%] p-3 rounded-2xl shadow-sm ${
                                        message.type === 'user'
                                            ? 'bg-gradient-to-br from-[#2d3561] to-[#1a1f3a] text-white rounded-br-none'
                                            : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none'
                                    }`}
                                >
                                    <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                                    <span className={`text-xs mt-1 block ${
                                        message.type === 'user' ? 'text-gray-300' : 'text-gray-400'
                                    }`}>
                                        {message.timestamp.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })}
                                    </span>
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Quick Replies */}
                    <div className="p-3 bg-gray-50 border-t border-gray-200">
                        <div className="grid grid-cols-2 gap-2 mb-2">
                            {quickReplies.map((reply) => (
                                <button
                                    key={reply.id}
                                    onClick={() => handleQuickReply(reply)}
                                    className="bg-white border border-gray-300 text-gray-700 text-sm py-2 px-3 rounded-lg hover:bg-gradient-to-r hover:from-[#2d3561] hover:to-[#1a1f3a] hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-md"
                                >
                                    <span className="ml-1">{reply.icon}</span>
                                    {reply.text}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-white border-t border-gray-200">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                                placeholder="اكتب رسالتك هنا..."
                                className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d3561] focus:border-transparent"
                            />
                            <button
                                onClick={() => handleSendMessage(inputValue)}
                                className="bg-gradient-to-r from-[#2d3561] to-[#1a1f3a] text-white rounded-full p-2 hover:scale-105 transition-all shadow-md hover:shadow-lg"
                                aria-label="إرسال"
                            >
                                <Send size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};


const SWITCH_INTERVAL = 5000;

const App = () => {
  const [isShowingWhats, setIsShowingWhats] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      return; 
    }

    const intervalId = setInterval(() => {
      setIsShowingWhats(prev => !prev);
    }, SWITCH_INTERVAL);

    return () => clearInterval(intervalId);
  }, [isOpen]); 


  useEffect(() => {
    if (isOpen) {
      setIsShowingWhats(false);
    }
  }, [isOpen]);

  return (
    <div className="z-[100]">
      {isShowingWhats ? (
        <WhatsComponent />
      ) : (
        <TadbeerChatbotComponent
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setIsShowingWhats={setIsShowingWhats}
        />
      )}
    </div>
  );
};

export default App;
