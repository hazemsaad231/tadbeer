

'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FaWhatsapp} from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { Send, X } from "lucide-react";

// --- 1. دالة فصل البيانات وتكبيرها (Data Source & Expansion) ---
const getChatbotData = () => {
    
    // 🎯 القائمة السريعة (Quick Replies) بناءً على طلبك الجديد 🎯
    const quickReplies = [
        { id: 1, text: 'خدمات الشركة', icon: '💼' },
        { id: 2, text: 'المدونة', icon: '📝' }, // رمز جديد للمدونة
        { id: 3, text: 'التوظيف', icon: '👔' },
        { id: 4, text: 'تواصل معنا', icon: '📞' },
        { id: 5, text: 'الفرص الاستثمارية', icon: '💎' },
        { id: 6, text: 'أسئلة شائعة', icon: '❓' }, // رمز جديد للأسئلة الشائعة
    ];

    // الردود المفصلة (Responses Object) مجمعة من جميع الصور والأسئلة الشائعة
    const responses = {
        // --- 🆕 الردود الاجتماعية والترحيب 🆕 ---
        'Greeting': 'أهلاً بك 👋 أنا مساعد تدبير الذكي. أنا بخير، شكراً لك على السؤال! كيف يمكنني مساعدتك في استفساراتك المالية والاستثمارية اليوم؟',
        'Thanks': 'على الرحب والسعة! هذا واجبي 😊. هل لديك أي استفسار آخر بخصوص خدمات تدبير أو فرصها الاستثمارية؟',
        'WhoAreYou': 'أنا مساعدك الذكي في **شركة تدبير المتخصصة**، ومهمتي هي الإجابة على استفساراتك بخصوص الخدمات المالية والاستثمارية وتطوير الأعمال.',
        'Bye': 'إلى اللقاء! يسعدنا جداً تواصلك معنا. نتمنى لك يوماً سعيداً.',


        // --- الرد الجديد للأسئلة الشائعة ---
        'أسئلة شائعة': 'مرحباً، إليك بعض المعلومات الأساسية عن الشركة:\n\n• **من نحن:** لمعرفة تاريخنا وخبرتنا (30 عاماً).\n• **رسالتنا ورؤيتنا:** لأهدافنا الاستراتيجية.\n• **الموقع الإلكتروني/السوشيال ميديا:** لمعرفة الروابط الرسمية.\n\nمن فضلك، اكتب السؤال المحدد أو اختر من القائمة السريعة.',
        
        // --- القسم التعريفي والرسالة والرؤية (من نحن؟ ما رسالتكم؟) ---
        'رسالة ورؤية الشركة': 'تهدف **تدبير** إلى تطوير الاستثمارات والأعمال التجارية والقطاع الخيري، من خلال تقديم الخدمات المالية والإدارية.\n\n🎯 **الرؤية:** تحسين الأداء المالي، تقديم خدمات واستشارات مالية وإدارية، والعمل بمعايير عالمية وتقنيات متقدمة.',

        'من نحن': 'نحن شركة تدبير المتخصصة في تقديم الخدمات المالية والمهنية لدعم نمو وتطور التجارة والأعمال. لدينا خبرة عميقة وفريق متخصص يوفر بيئة استثمارية موثوقة.\n\n**قصة نجاحنا:** بدأت **شركة داره** مشوارها منذ ثلاثين عاماً لتنظيم قطع غيار السيارات في المملكة والشرق الأوسط.',

        // --- قسم الاستثمار والفرص (كيف أستثمر؟ ما هي داره؟) ---
        'الفرص الاستثمارية': 'نحرص على اقتناص الفرص الواعدة. الفرص المتاحة حالياً:\n1️⃣ **شركة داره** (قطع غيار السيارات)\n2️⃣ **خدمات مالية ومهنية** (تدبير)\n\nاكتب اسم الفرصة أو "استثمار الآن" لطلب الملف التعريفي 💎.',

        'شركة داره': '🚗 **شركة داره**\nهي شركتك المتخصصة في توريد وتوزيع قطع غيار السيارات الأصلية والموثوقة. نقدم ضمان استمرارية أداء سيارتك بفضل خبرتنا العميقة والتزامنا بأعلى معايير الجودة العالمية.\n\n**مميزاتها:** مرونة التوصيل، ضمان عام، وخدمة ما بعد البيع. لطلب الملف الاستثماري، يرجى كتابة "استثمار الآن".',

        'استثمار الآن': 'سجل الآن للاستثمار معنا! 🤝\nيرجى تزويدنا برقم جوالك أو زيارة صفحة "استثمر الآن" وسيقوم مستشار الاستثمار بالتواصل معك.',

        // --- قسم الخدمات التفصيلية (ما هي خدماتكم؟ ما الفرق بين الجدوى والموازنة؟) ---
        'خدمات الشركة': 'نقدم باقة شاملة لضبط أرقام شركتك (مالية ومحاسبية):\n\n• **الخدمات المحاسبية:** (ضريبة القيمة المضافة، مسك الدفاتر، الزكاة)\n• **الخدمات الاستشارية:** (دراسات الجدوى، التحليل المالي، الموازنات)\n\nاكتب "ضمان" لمعرفة خدمات "داره" الخاصة بقطع الغيار.',

        'دراسات الجدوى': 'دراسات الجدوى هي خريطتك للنجاح 🗺️. نقدم دراسات تسويقية وفنية ومالية للتأكد من ربحية مشروعك والتنبؤ بأدائه المستقبلي.',
        
        'ضريبة القيمة المضافة': 'نساعدك في الامتثال الضريبي الكامل، بما في ذلك التسجيل والإقرارات والفحص والزكاة. هدفنا هو تجنب الغرامات وضمان الامتثال القانوني.',
        
        'مسك الدفاتر': 'خدمة **مسك الدفاتر** تعني تسجيل وتصنيف جميع المعاملات المالية لشركتك بدقة واحترافية، مما يسهل اتخاذ القرارات المالية السليمة.',
        
        'الموازنات': 'خدمة إعداد **الموازنات المالية** تساعدك في التخطيط للأداء المالي المستقبلي ومقارنته بالأداء الفعلي، وهي أساس لقياس مؤشرات الأداء الرئيسية (KPIs).',

        // --- قسم التوظيف (هل يوجد وظائف شاغرة؟) ---
        'التوظيف': 'أهلاً بك في بوابة التوظيف! 👔\nللانضمام لفريقنا، يمكنك تقديم سيرتك الذاتية عبر النموذج بالأسفل أو البحث عن وظيفة شاغرة.\n\nللاستفسارات: careers@tadbeer.sa',

        'كيف اقدم على وظيفة': 'للتقديم، يرجى إرسال سيرتك الذاتية (CV) إلى البريد الإلكتروني المخصص: careers@tadbeer.sa. سنقوم بمراجعة طلبك والتواصل معك في حال تطابق المؤهلات.',


        // --- قسم التواصل والموقع (ما هي طرق التواصل؟) ---
        'تواصل معنا': 'يسعدنا تواصلك:\n\n📞 **رقم الهاتف:** 0555144382\n✉️ **البريد الإلكتروني:** info@tadbeer.sa\n📍 **العنوان:** 6174 محمد بن عبدالعزيز، جدة 23443، المملكة العربية السعودية.',
        
        'الموقع الإلكتروني': 'رابط موقعنا الرسمي: https://tadbeer-nine.vercel.app',

        'السوشيال ميديا': 'تابعنا على شبكات التواصل الاجتماعي للحصول على آخر الأخبار والعروض (LinkedIn, Twitter, YouTube, Instagram, Facebook).',
        
        // --- المدونة ---
        'المدونة': 'نقدم محتوى قيّم يغطي مواضيع مثل تأثير التغيرات الاجتماعية على الاستثمار، المفتاح السحري لإدارة المشروعات، وفترات الركود والتحليل والتسويق.',

        // --- الرد الافتراضي ---
        'default': 'عذراً، لم أفهم سؤالك تحديداً. يمكنك استخدام أحد الأزرار السريعة أدناه أو كتابة كلمات مفتاحية مثل "استثمار"، "جدوى"، أو "توظيف".',
    };

    return { quickReplies, responses };
};

// --- 2. منطق تحليل الإدخال الذكي (Matching Logic) ---
const getBotResponse = (input, responses) => {
    const cleanInput = input.trim().toLowerCase();

    // 0. 🆕 شروط التحية والاجتماعية 🆕
    if (cleanInput.includes('كيف حالك') || cleanInput.includes('شخبارك') || cleanInput.includes('عامل ايه')) return responses['Greeting'];
    if (cleanInput.includes('سلام') || cleanInput.includes('اهلاً') || cleanInput.includes('مرحبا') || cleanInput.includes('صباح الخير') || cleanInput.includes('مساء الخير')) return responses['Greeting'];
    if (cleanInput.includes('شكرا') || cleanInput.includes('جزيل الشكر') || cleanInput.includes('يعطيك العافية')) return responses['Thanks'];
    if (cleanInput.includes('من انت') || cleanInput.includes('ما اسمك')) return responses['WhoAreYou'];
    if (cleanInput.includes('باي') || cleanInput.includes('مع السلامة') || cleanInput.includes('إلى اللقاء')) return responses['Bye'];


    // 1. شروط المعلومات العامة والتعريف
    if (cleanInput.includes('تواصل') || cleanInput.includes('هاتف') || cleanInput.includes('عنوان') || cleanInput.includes('ايميل') || cleanInput.includes('مواعيد')) return responses['تواصل معنا'];
    if (cleanInput.includes('من نحن') || cleanInput.includes('نبذة') || cleanInput.includes('تاريخ') || cleanInput.includes('30 سنة') || cleanInput.includes('خلفية') || cleanInput.includes('الشركة')) return responses['من نحن'];
    if (cleanInput.includes('رؤية') || cleanInput.includes('رسالة') || cleanInput.includes('هدف') || cleanInput.includes('قيام') || cleanInput.includes('قيمنا')) return responses['رسالة ورؤية الشركة'];
    if (cleanInput.includes('موقع') || cleanInput.includes('رابط') || cleanInput.includes('دومين')) return responses['الموقع الإلكتروني'];
    if (cleanInput.includes('مدونة') || cleanInput.includes('مقالات') || cleanInput.includes('مواضيع')) return responses['المدونة'];
    if (cleanInput.includes('سوشيال ميديا') || cleanInput.includes('انستجرام') || cleanInput.includes('فيس بوك') || cleanInput.includes('تويتر')) return responses['السوشيال ميديا'];
    if (cleanInput.includes('شائعة') || cleanInput.includes('اسئلة عامة') || cleanInput === 'أسئلة شائعة') return responses['أسئلة شائعة'];

    // 2. شروط الخدمات والتفاصيل المحاسبية
    if (cleanInput.includes('خدمات') || cleanInput.includes('باقة') || cleanInput.includes('محاسبية') || cleanInput.includes('استشارية')) return responses['خدمات الشركة'];
    if (cleanInput.includes('ضريبة') || cleanInput.includes('زكاة') || cleanInput.includes('فحص ضريبي') || cleanInput.includes('اعداد اقرار')) return responses['ضريبة القيمة المضافة'];
    if (cleanInput.includes('جدوى') || cleanInput.includes('اقتصادية') || cleanInput.includes('تسويقية') || cleanInput.includes('مالية')) return responses['دراسات الجدوى'];
    if (cleanInput.includes('دفاتر') || cleanInput.includes('مسك') || cleanInput.includes('تسجيل قيود')) return responses['مسك الدفاتر'];
    if (cleanInput.includes('موازنات') || cleanInput.includes('مؤشرات اداء') || cleanInput.includes('KPI')) return responses['الموازنات'];
    
    // 3. شروط الاستثمار وشركة داره
    if (cleanInput.includes('استثمار') || cleanInput.includes('فرص') || cleanInput.includes('مشروعات') || cleanInput.includes('كم العائد')) return responses['الفرص الاستثمارية'];
    if (cleanInput.includes('داره') || cleanInput.includes('سيارات') || cleanInput.includes('غيار') || cleanInput.includes('ضمان')) return responses['شركة داره'];
    if (cleanInput.includes('سعر') || cleanInput.includes('عرض') || cleanInput.includes('طلب ملف') || cleanInput.includes('استثمار الآن')) return responses['استثمار الآن'];

    // 4. شروط التوظيف
    if (cleanInput.includes('توظيف') || cleanInput.includes('وظائف') || cleanInput.includes('شغل') || cleanInput.includes('سيرة ذاتية') || cleanInput.includes('شاغرة')) return responses['التوظيف'];
    if (cleanInput.includes('كيف اقدم') || cleanInput.includes('تقديم وظيفة') || cleanInput.includes('إرسال سيرة')) return responses['كيف اقدم على وظيفة'];


    // الرد المباشر للنص المكتوب بالضبط أو الرد الافتراضي
    if (responses[cleanInput]) return responses[cleanInput];
    return responses['default'];
};


// --- مكون الواتساب (لم يتم تعديله للحفاظ على تصميمك) ---
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
    }, [currentMessageIndex, messages.length]);

    return (
        
        <div className="fixed bottom-5 left-5 z-50"> 
            {isVisible && (
                <div className="absolute left-16 bottom-2 p-2 bg-white text-[#322b83] rounded-lg shadow-xl w-max transition-opacity duration-300 transform scale-100 origin-bottom-right">
                    <p className="text-sm font-semibold">{messages[currentMessageIndex]}</p>
                </div>
            )}
            <div className="bg-[#322b83] p-3 rounded-full flex justify-center items-center hover:scale-110 transition-all duration-300">
                <a href="https://wa.me/966555144382" target="_blank" rel="noopener noreferrer">
                    
                    <FaWhatsapp className="text-white cursor-pointer text-2xl md:text-3xl lg:text-3xl font-bold"/>
                </a>
            </div>
        </div>
    );
};


// --- 3. مكون الشات بوت الرئيسي ---
const TadbeerChatbotComponent = ({ isOpen, setIsOpen, setIsShowingWhats }) => {

    const { quickReplies, responses } = getChatbotData();

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
    }, [currentMessageIndex, message.length]);

    // منطق الشات بوت الرئيسي
    const [messages, setMessages] = useState([
        {
            type: 'bot',
            text: 'مرحباً بك في شركة تدبير المتخصصة 👋\n\nنحن شركة متخصصة في تقديم الخدمات المالية والمهنية لدعم نمو وتطور التجارة والأعمال.\n\nكيف يمكنني مساعدتك اليوم؟',
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef(null);

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
            // استخدام دالة getBotResponse للتحقق من النص المدخل
            const botResponseText = getBotResponse(text, responses);
            
            const botResponse = {
                type: 'bot',
                text: botResponseText,
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botResponse]);
        }, 800);
    };

    const handleQuickReply = (reply) => {
        handleSendMessage(reply.text);
    };

    // تم تحديث هذه الدالة لتشمل الأيقونات الجديدة: 📝 و ❓
    const getIcon = (icon) => {
        switch (icon) {
            case '💎': return '⭐';
            case '💼': return '💼';
            case '🎯': return '💡';
            case '👔': return '👔';
            case '📞': return '☎️';
            case '📝': return '📰';
            case '❓': return '❔';
            default: return '';
        }
    };


    return (
        <div>

            {isVisible && !isOpen && (
                <div 
                    className="fixed bottom-24 right-6 z-50 w-max transition-all duration-500"
                    dir="rtl"
                >
                    <div 
                        className="p-3 bg-white border-4 rounded-3xl shadow-2xl transition-opacity duration-300 origin-bottom-left"
                    >
                        <p className="text-sm text-center font-medium text-gray-800 leading-relaxed">
                            <span className="ml-1">👋</span> <span className="inline font-bold text-[#322b83]">{message[currentMessageIndex]}</span>
                            <br />
                            <span className="text-sm text-gray-500 m-1 block p-1 border-t border-gray-100">
                                أنا مساعد تدبير الذكي.
                            </span>
                        </p>
                    </div>
                </div>
            )}

            {/* زر فتح الشات بوت (Toggle Button) */}
            {!isOpen && (
                <button
                    onClick={() => {
                        setIsOpen(true);
                        setIsShowingWhats(false);
                    }}
                    className="fixed bottom-6 right-6 bg-gradient-to-br from-[#2d3561] to-[#1a1f3a] text-white rounded-full p-3 shadow-2xl hover:scale-110 transition-all duration-300 z-50 group"
                    aria-label="فتح المحادثة"
                >
                    <TiMessages className="group-hover:rotate-12 transition-transform text-white cursor-pointer text-2xl md:text-3xl lg:text-3xl font-bold" />
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
                                {/* يمكن إضافة Image هنا */}
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
                                className={`mb-4 flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
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
                                    <span className="ml-1">{getIcon(reply.icon)}</span>
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
                                disabled={!inputValue.trim()}
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


// --- 4. مكون التبديل بين الواتساب والشات بوت (App Wrapper) ---
const SWITCH_INTERVAL = 10000;

const App = () => {
    const [isShowingWhats, setIsShowingWhats] = useState(false);
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