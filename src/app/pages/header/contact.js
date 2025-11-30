

'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FaWhatsapp} from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { Send, X } from "lucide-react";

// --- 1. دالة فصل البيانات وتكبيرها (Data Source & Expansion) ---



// --- 1. تعريف الردود والأزرار السريعة (Data Structure) ---
const getChatbotData = () => {
    const quickReplies = [
        { id: 1, text: 'خدمات الشركة', icon: '💼' },
        { id: 2, text: 'المدونة', icon: '📝' },
        { id: 3, text: 'التوظيف', icon: '👔' },
        { id: 4, text: 'تواصل معنا', icon: '📞' },
        { id: 5, text: 'الفرص الاستثمارية', icon: '💎' },
        { id: 6, text: 'أسئلة شائعة', icon: '❓' },
    ];

    const responses = {
        // ---------------------------------------------------------------------
        // 👑 --- 1. الردود الاجتماعية والترحيب الأساسية --- 👑
        // ---------------------------------------------------------------------
        'Greeting': 'أهلاً بك 👋 أنا مساعد تدبير الذكي. أنا هنا لأجيب على استفساراتك حول الخدمات المالية والاستشارية لشركة تدبير. كيف يمكنني مساعدتك اليوم؟',
        'Thanks': 'على الرحب والسعة! هذا واجبي 😊. إذا كان لديك أي استفسار إضافي عن خدمات تدبير أو مجالات عملها، أنا جاهز للمساعدة.',
        'WhoAreYou': 'أنا مساعدك الذكي في شركة **تدبير المتخصصة**، ومهمتي هي توفير المعلومات الأساسية عن خدماتنا المالية والاستشارية وتطوير الأعمال.',
        'Bye': 'إلى اللقاء! يسعدنا جداً تواصلك معنا. نتمنى لك يوماً سعيداً ومليئاً بالنجاح.',
        'HowAreYou': 'أنا بخير والحمد لله، شكراً لسؤالك! كيف يمكنني مساعدتك في استفساراتك حول شركة تدبير اليوم؟',
        'GoodMorning': 'صباح الخير! كيف يمكنني مساعدتك اليوم بخصوص استفساراتك المالية؟',
        'GoodEvening': 'مساء الخير! أنا جاهز لمساعدتك في أي استفسار عن خدمات تدبير.',


        // ---------------------------------------------------------------------
        // 📝 --- 2. الردود التعريفية (الشركة والرسالة) --- 📝
        // ---------------------------------------------------------------------
        'من نحن': 'نحن شركة تدبير، متخصصون في تقديم الخدمات المالية والمهنية لتطوير التجارة والأعمال والقطاع الخيري. لدينا خبرة تتجاوز 30 عامًا في السوق.',
        'رسالة ورؤية الشركة': 'تهدف تدبير إلى تطوير الأعمال التجارية والقطاع الخيري، من خلال تقديم الخدمات المالية والإدارية بمعايير عالمية وتقنيات متقدمة.\n\n🎯 رؤيتنا: أن نكون الشريك المالي والاستشاري الموثوق لتحقيق النمو المستدام لعملائنا.',
        'لماذا نختار تدبير؟': 'نحن نتميز بـ: \n\n1. الخبرة العميقة (30 عاماً).\n2. الشفافية والموثوقية.\n3. الحلول المتكاملة التي تغطي المالية والإدارة. \n\nنحن شركاء النجاح الفعليين لعملائنا.',

        // ---------------------------------------------------------------------
        // 💰 --- 3. قسم الاستثمار والفرص المتاحة --- 💰
        // ---------------------------------------------------------------------
        'الفرص الاستثمارية': 'الفرص الاستثمارية المتاحة حالياً:\n\n1️⃣ شركة داره (قطع غيار السيارات).\n2️⃣ شركة تدبير المتخصصة (خدمات مالية ومهنية وتطوير أعمال).\n\nاكتب اسم الفرصة "داره" أو "تدبير" لطلب الملف التعريفي 💎.',
        'شركة داره': '🚗 شركة داره هي شركتك المتخصصة في توريد وتوزيع قطع غيار السيارات الأصلية والموثوقة. تتميز بضمان الجودة والالتزام بالمعايير العالمية. لطلب الملف الاستثماري، يرجى كتابة "استثمار الآن".',
        'شركة تدبير المتخصصة': '💡 فرصة الاستثمار في شركة تدبير تهدف لدعم نمو الخدمات المالية والاستشارية وتطوير الأعمال والقطاع الخيري. اطلب الملف لتعرف كيف يمكن أن تكون شريكاً في هذا النمو.',
        'استثمار الآن': 'سجل الآن للاستثمار معنا! 🤝\nيرجى تزويدنا برقم جوالك أو زيارة صفحة "استثمر الآن" وسيقوم مستشار الاستثمار بالتواصل معك.',

        // ---------------------------------------------------------------------
        // 📊 --- 4. قسم الخدمات المالية والإدارية (تدبير) --- 📊
        // ---------------------------------------------------------------------
        'خدمات الشركة': 'نقدم باقة شاملة من الخدمات المالية والمحاسبية والاستشارية لضمان نمو شركتك. وتشمل:\n\n الخدمات المحاسبية: (مسك الدفاتر، الزكاة، ضريبة القيمة المضافة).\n الخدمات الاستشارية: (دراسات الجدوى، الموازنات، التحليل المالي).\n\nاكتب اسم الخدمة (مثال: "دراسات الجدوى") لمعرفة التفاصيل.',

        // --- تفصيل الخدمات الاستشارية ---
        'دراسات الجدوى': 'دراسات الجدوى هي خريطتك للنجاح 🗺️. نقدم دراسات تسويقية، فنية، ومالية متكاملة، لمساعدتك في اتخاذ قرارات الاستثمار الصحيحة وضمان ربحية مشاريعك.',
        'إعداد الموازنات التقديرية': 'خدمة إعداد الموازنات التقديرية تساعدك على التخطيط للأداء المالي المستقبلي ومقارنته بالأداء الفعلي، مما يسهل قياس مؤشرات الأداء الرئيسية (KPIs).',
        'التحليل المالي': 'خدمة التحليل المالي تقدم رؤى واضحة عن الأداء المالي لشركتك، وتحدد نقاط القوة والضعف لاتخاذ قرارات استراتيجية مبنية على البيانات.',
        'التدقيق الداخلي': 'نقدم خدمة التدقيق الداخلي لتقييم كفاءة عمليات شركتك ونظم الرقابة الداخلية، مما يساعد في الحد من المخاطر المالية والإدارية.',

        // --- تفصيل الخدمات المحاسبية والضريبية ---
        'مسك الدفاتر': 'مسك الدفاتر يعني تسجيل وتصنيف جميع المعاملات المالية لشركتك بدقة واحترافية، مما يضمن جاهزية التقارير والامتثال القانوني.',
        'ضريبة القيمة المضافة': 'نقدم خدمات الامتثال الضريبي الكامل، بما في ذلك التسجيل في هيئة الزكاة والضريبة والجمارك (ZATCA)، إعداد وتقديم الإقرارات الضريبية، لتجنب الغرامات.',
        'الزكاة والدخل': 'نوفر خدمة احتساب الزكاة والضريبة بدقة، وإعداد وتقديم الإقرارات الخاصة بها لضمان الامتثال التام مع متطلبات الهيئة.',

        // ---------------------------------------------------------------------
        // 💼 --- 5. قسم التوظيف والفرص الوظيفية --- 💼
        // ---------------------------------------------------------------------
        'التوظيف': 'أهلاً بك في بوابة التوظيف! 👔\nنبحث دائمًا عن المواهب. لتقديم سيرتك الذاتية (CV)، يرجى إرسالها إلى البريد الإلكتروني: info@tadbeer.sa سنجري المراجعة والتواصل معك في حال وجود فرصة شاغرة تناسب مؤهلاتك.',

        // ---------------------------------------------------------------------
        // 🌐 --- 6. قسم التواصل والموقع والشكاوى --- 🌐
        // ---------------------------------------------------------------------
        'تواصل معنا': 'يسعدنا تواصلك:\n\n📞 رقم الهاتف: 0555144382\n✉️ البريد الإلكتروني: info@tadbeer.sa\n📍 العنوان: 6174 محمد بن عبدالعزيز، جدة 23443، المملكة العربية السعودية.',
        'الموقع الإلكتروني': ' -  https://tadbeer.sa\n\nهذا الموقع يستجد فيه تفاصيل خدماتنا والمدونة.',
        'السوشيال ميديا': 'تابعنا للحصول على آخر التحديثات والتحليلات المالية. ابحث عن "تدبير" على LinkedIn, Twitter, و Instagram.',
        'تقديم شكوى': 'لتقديم شكوى أو اقتراح، يرجى إرسال بريد إلكتروني مفصل إلى: complaints@tadbeer.sa وسنتواصل معك خلال يومي عمل.',

        // ---------------------------------------------------------------------
        // ❓ --- 7. الردود المتنوعة والافتراضية --- ❓
        // ---------------------------------------------------------------------
        'أسئلة شائعة': 'مرحباً، إليك قائمة سريعة بأكثر المواضيع شيوعًا حول شركة تدبير:\n\n• من نحن\n• الفرص الاستثمارية\n• خدمات الشركة\n• تواصل معنا\n\nمن فضلك، اكتب السؤال المحدد أو اختر من القائمة السريعة.',
        'المدونة': 'نقدم محتوى قيّم يغطي مواضيع مالية واستشارية متنوعة. يمكنك زيارة قسم المدونة على موقعنا للاطلاع على جميع المقالات.',
        'default': 'عذراً، لم أفهم سؤالك تحديداً. أنا متخصص في الإجابة عن استفسارات تدبير المالية والاستشارية. يمكنك استخدام أحد الأزرار السريعة أو كتابة كلمات مفتاحية مثل "استثمار"، "جدوى"، "توظيف"، أو "تواصل".',
    };
    return { quickReplies, responses };
};

// --- 2. منطق تحليل الإدخال الذكي (Matching Logic) ---
const getBotResponse = (input, responses) => {
    const cleanInput = input.trim().toLowerCase();

    // ----------------------------------------------------------------------
    // 0. 🆕 شروط التحية والاجتماعية 🆕
    // ----------------------------------------------------------------------
    const greetingKeywords = ['كيف حالك', 'شخبارك', 'عامل ايه', 'سلام', 'اهلاً', 'مرحبا', 'صباح الخير', 'مساء الخير', 'هاي', 'هلا'];
    const thanksKeywords = ['شكرا', 'جزيل الشكر', 'يعطيك العافية', 'مجهود', 'مشكور', 'ثانكس'];
    const whoAreYouKeywords = ['من انت', 'ما اسمك', 'تعرف على نفسك', 'ماذا تفعل', 'من حضرتك'];
    const byeKeywords = ['باي', 'مع السلامة', 'إلى اللقاء', 'اشوفك بعدين', 'وداعاً'];

    if (greetingKeywords.some(keyword => cleanInput.includes(keyword))) return responses['Greeting'];
    if (thanksKeywords.some(keyword => cleanInput.includes(keyword))) return responses['Thanks'];
    if (whoAreYouKeywords.some(keyword => cleanInput.includes(keyword))) return responses['WhoAreYou'];
    if (byeKeywords.some(keyword => cleanInput.includes(keyword))) return responses['Bye'];


    // ----------------------------------------------------------------------
    // 1. شروط المعلومات العامة والتعريف
    // ----------------------------------------------------------------------
    const contactKeywords = ['تواصل', 'هاتف', 'عنوان', 'ايميل', 'مواعيد', 'فرع', 'أتصل', 'رقمكم'];
    const aboutUsKeywords = ['من نحن', 'نبذة', 'تاريخ', '30 سنة', 'خلفية', 'الشركة', 'تأسيس'];
    const visionKeywords = ['رؤية', 'رسالة', 'هدف', 'قيمنا', 'مهمة'];
    const websiteKeywords = ['موقع', 'رابط', 'دومين', 'www', 'صفحتكم'];
    const blogKeywords = ['مدونة', 'مقالات', 'مواضيع', 'أخبار', 'تحليلات', 'جديد'];
    const socialMediaKeywords = ['سوشيال ميديا', 'انستجرام', 'فيس بوك', 'تويتر', 'لينكد إن', 'تابعونا'];
    const faqKeywords = ['شائعة', 'اسئلة عامة', 'أكثر سؤال'];

    if (contactKeywords.some(keyword => cleanInput.includes(keyword))) return responses['تواصل معنا'];
    if (aboutUsKeywords.some(keyword => cleanInput.includes(keyword))) return responses['من نحن'];
    if (visionKeywords.some(keyword => cleanInput.includes(keyword))) return responses['رسالة ورؤية الشركة'];
    if (websiteKeywords.some(keyword => cleanInput.includes(keyword))) return responses['الموقع الإلكتروني'];
    if (blogKeywords.some(keyword => cleanInput.includes(keyword))) return responses['المدونة'];
    if (socialMediaKeywords.some(keyword => cleanInput.includes(keyword))) return responses['السوشيال ميديا'];
    if (faqKeywords.some(keyword => cleanInput.includes(keyword))) return responses['أسئلة شائعة'];


    // ----------------------------------------------------------------------
    // 2. شروط الخدمات والتفاصيل المحاسبية (مرتبة من الأكثر تحديداً للأعم)
    // ----------------------------------------------------------------------
    const feasibilityKeywords = ['جدوى', 'اقتصادية', 'تسويقية', 'مالية', 'دراسة مشروع', 'تقييم فكرة', 'خطة عمل'];
    const taxKeywords = ['ضريبة', 'زكاة', 'فحص ضريبي', 'اعداد اقرار', 'zatca', 'قيمة مضافة', 'التزام ضريبي', 'زكوي'];
    const bookkeepingKeywords = ['دفاتر', 'مسك', 'تسجيل قيود', 'حسابات', 'تنظيم الحسابات', 'تقارير شهرية', 'محاسبة'];
    const budgetingKeywords = ['موازنات', 'تخطيط مالي', 'الميزانية السنوية', 'تقدير التكاليف', 'توقعات مالية'];
    const financialAnalysisKeywords = ['تحليل مالي', 'مؤشرات أداء', 'kpi', 'نقاط قوة وضعف', 'وضع مالي', 'التحليل'];
    const auditKeywords = ['تدقيق داخلي', 'مراجعة', 'رقابة', 'تقييم كفاءة', 'نظام رقابة'];

    // تفصيل الخدمات
    if (feasibilityKeywords.some(keyword => cleanInput.includes(keyword))) return responses['دراسات الجدوى'];
    if (taxKeywords.some(keyword => cleanInput.includes(keyword))) return responses['ضريبة القيمة المضافة'];
    if (bookkeepingKeywords.some(keyword => cleanInput.includes(keyword))) return responses['مسك الدفاتر'];
    if (budgetingKeywords.some(keyword => cleanInput.includes(keyword))) return responses['إعداد الموازنات التقديرية'];
    if (financialAnalysisKeywords.some(keyword => cleanInput.includes(keyword))) return responses['التحليل المالي'];
    if (auditKeywords.some(keyword => cleanInput.includes(keyword))) return responses['التدقيق الداخلي'];

    // الشروط العامة للخدمات تكون في الأسفل
    if (cleanInput.includes('خدمات') || cleanInput.includes('باقة') || cleanInput.includes('محاسبية') || cleanInput.includes('استشارية') || cleanInput.includes('ايش تسوون')) return responses['خدمات الشركة'];


    // ----------------------------------------------------------------------
    // 3. شروط الاستثمار وشركة داره
    // ----------------------------------------------------------------------
    const investmentKeywords = ['استثمار', 'فرص', 'مشروعات', 'كم العائد', 'ادخل شريك', 'رأس مال', 'تمويل'];
    const darahKeywords = ['داره', 'سيارات', 'غيار', 'قطع غيار', 'الاستثمار في داره'];
    const tadbeerInvestmentKeywords = ['تدبير المتخصصة', 'الاستثمار في تدبير', 'شراكة تدبير', 'استثمار تدبير'];
    const callToActionKeywords = ['سعر', 'عرض', 'طلب ملف', 'استثمار الآن', 'سجل الآن', 'أريد أن استثمر'];

    // الاستثمار بالتفصيل
    if (darahKeywords.some(keyword => cleanInput.includes(keyword))) return responses['شركة داره'];
    if (tadbeerInvestmentKeywords.some(keyword => cleanInput.includes(keyword))) return responses['شركة تدبير المتخصصة'];
    if (callToActionKeywords.some(keyword => cleanInput.includes(keyword))) return responses['استثمار الآن'];

    // الاستثمار العام
    if (investmentKeywords.some(keyword => cleanInput.includes(keyword))) return responses['الفرص الاستثمارية'];


    // ----------------------------------------------------------------------
    // 4. شروط التوظيف والشكاوى
    // ----------------------------------------------------------------------
    const hiringKeywords = ['توظيف', 'وظائف', 'شغل', 'سيرة ذاتية', 'شاغرة', 'تقديم', 'عمل', 'أبحث عن وظيفة'];
    const complaintsKeywords = ['شكوى', 'اقتراح', 'تظلم', 'غير راض'];

    if (hiringKeywords.some(keyword => cleanInput.includes(keyword))) return responses['التوظيف'];
    if (complaintsKeywords.some(keyword => cleanInput.includes(keyword))) return responses['تقديم شكوى'];


    // الرد المباشر للنص المكتوب بالضبط أو الرد الافتراضي
    if (responses[cleanInput]) return responses[cleanInput];
    return responses['default'];
};

// --- استخدام الدوال (للتشغيل في بيئة Javascript) ---
const { quickReplies, responses } = getChatbotData();

// مثال للاستخدام:
// console.log(getBotResponse("أريد تقديم شكوى", responses));
// console.log(getBotResponse("ايش عندكم خدمات", responses));
// console.log(getBotResponse("كيف اطلب ملف استثماري", responses));
// console.log(getBotResponse("من انت", responses));





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