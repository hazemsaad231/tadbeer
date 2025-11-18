"use client"

import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import axios from "axios"
import toast from "react-hot-toast"
import { useParams} from "next/navigation"


export default function Form() {
  const params = useParams()
  
  const id = params?.id

  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      invest_id: "",
      number_of_arrows: 1,
      name: "",
      phone: "",
      notes: "",
    },
  })

  useEffect(() => {
    if (id) {
      setValue("invest_id", id)
    }
  }, [id, setValue])

  const onSubmit = async (data) => {
    try {
      setLoading(true)
      console.log("sending:", JSON.stringify(data, null, 2))

      const res = await axios.post(
        "https://tadbeer.wj.edu.sa/public/api/investors",
        data
      )

      reset({ invest_id: id ?? "", number_of_arrows: 1, name: "", notes: "", phone: "" })
      toast.success("تم الارسال بنجاح")
      
    } catch (err) {
      console.error("submit error", err)
      toast.error("لم يتم الارسال بنجاح")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative overflow-hidden">
      {/* Warning Banner */}
  


      {/* Main Container with Slant Background */}
      <div className="relative flex items-center justify-center py-16 md:py-24 px-4 bg-white">
        {/* Slanted Background Effect */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-[#030352] to-[#262163]  pointer-events-none"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 15%, 0 100%)'
          }}
        />

        {/* Background Decorations */}
        <div className="absolute inset-0 opacity-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-400 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
        </div>

        {/* Card */}
        <Card className="relative z-20 w-full max-w-lg shadow-2xl border-0 rounded-3xl bg-white">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-3xl md:text-4xl font-bold text-gray-800">
              نموذج استثمار
            </CardTitle>
          </CardHeader>

          <CardContent className="px-6 md:px-8 pb-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Hidden invest_id */}
              <input type="hidden" {...register("invest_id")} />

              {/* الاسم الكامل */}
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-semibold text-gray-700 text-right">
                  الاسم الكامل
                </label>
                <Input
                  id="name"
                  placeholder="اكتب اسمك الكامل"
                  {...register("name", { required: "الاسم مطلوب" })}
                  className={`border-2 rounded-lg p-3 text-right transition-all ${
                    errors.name ? "border-red-500" : "border-gray-300 focus:border-[#030352]"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1 text-right">{errors.name.message}</p>
                )}
              </div>

              {/* رقم الهاتف */}
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-semibold text-gray-700 text-right">
                  رقم الهاتف
                </label>
                <Input
                  id="phone"
                  placeholder="05xxxxxxxx"
                  {...register("phone", { required: "رقم الهاتف مطلوب" })}
                  className={`border-2 rounded-lg p-3 text-right transition-all ${
                    errors.phone ? "border-red-500" : "border-gray-300 focus:border-[#030352]"
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1 text-right">{errors.phone.message}</p>
                )}
              </div>

              {/* عدد الأسهم */}
              <div>
                <label htmlFor="number_of_arrows" className="block mb-2 text-sm font-semibold text-gray-700 text-right">
                  عدد الأسهم المراد استثمارها
                </label>
                <Input
                  id="number_of_arrows"
                  type="number"
                  min="1"
                  step="1"
                  {...register("number_of_arrows", {
                    required: "الكمية مطلوبة",
                    min: { value: 1, message: "لا يمكن أن تكون أقل من 1" },
                    valueAsNumber: true,
                  })}
                  className={`border-2 rounded-lg p-3 text-right transition-all ${
                    errors.number_of_arrows ? "border-red-500" : "border-gray-300 focus:border-[#030352]"
                  }`}
                />
                {errors.number_of_arrows && (
                  <p className="text-red-500 text-xs mt-1 text-right">{errors.number_of_arrows.message}</p>
                )}
              </div>

              {/* ملاحظات */}
              <div>
                <label htmlFor="notes" className="block mb-2 text-sm font-semibold text-gray-700 text-right">
                  ملاحظات (اختياري)
                </label>
                <textarea
                  id="notes"
                  placeholder="أضف أي ملاحظات إضافية..."
                  {...register("notes", { required: false })}
                  className="w-full p-3 rounded-lg border-2 border-gray-300 focus:border-[#030352] focus:outline-none h-24 resize-none text-right transition-all"
                />
              </div>

              {/* زر الإرسال */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full cursor-pointer bg-[#030352] py-2 px-4 rounded-full font-semibold
                        shadow shadow-[#030352]/60 
                        hover:shadow-xl hover:scale-[1.05] 
                        hover:bg-[#030352]
                        transition-all duration-300 transform text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="animate-spin">⏳</span>
                    جاري الإرسال...
                  </span>
                ) : (
                  "إرسال"
                )}
              </Button>

           

        
      
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Footer */}
      <div className="bg-white border-t border-gray-200 px-6 py-6 text-center">
        <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-600">
          <a href="#" className="hover:text-[#030352]">تحذير المخاطر</a>
          <a href="#" className="hover:text-[#030352]">الشروط والأحكام</a>
          <a href="#" className="hover:text-[#030352]">ملفات تعريف الارتباط</a>
          <a href="#" className="hover:text-[#030352]">الإفصاح</a>
          <a href="#" className="hover:text-[#030352]">سياسة الخصوصية</a>
        </div>
      </div>
    </div>
  )
}


