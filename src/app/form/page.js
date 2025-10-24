"use client"

import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import axios from "axios"
import { GrToast } from "react-icons/gr"
import toast from "react-hot-toast"

export default function Form() {
 
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      invest_id: 1, // لو عايز تبعت id افتراضي. غيره أو خلي select.
      number_of_arrows: 1
    }
  })

  const onSubmit = async (data) => {
    // لو البيانات فيها رقم اتأكدنا انه Number عن طريق valueAsNumber أسفل
    try {
      // لو عايز تتأكد من الشكل قبل الإرسال:
      console.log("sending:", JSON.stringify(data, null, 2))

      const res = await axios.post(
        "https://tadbeer.wj.edu.sa/public/api/investors",
        data
      )

      toast.success("تم الارسال بنجاح")
      
      console.log("response", res.data)
    
      // تفريغ الفورم بعد النجاح
      reset()
      // هنا تقدر تعمل toast نجاح لو عايز
    } catch (err) {
      console.error("submit error", err)
      // هنا تقدر تعرض toast للخطأ
    }
  }

  return (
    <div className="h-full flex items-center justify-center py-20 p-4 bg-gray-100">
      <Card className="w-full md:w-1/2 shadow-lg">
        <CardHeader>
          <CardTitle>نموذج استثمار</CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            {/* hidden invest_id لو محتاج تبعته */}
            <input type="hidden" {...register("invest_id", { value: 1 })} />

            <div>
              <label className="block mb-1">الاسم الكامل</label>
              <Input
                placeholder="اكتب اسمك الكامل"
                {...register("name", { required: true })}
              />
            </div>

            <div>
              <label className="block mb-1">رقم الهاتف</label>
              <Input
                placeholder="اكتب رقم هاتفك"
                {...register("phone", { required: true })}
              />
            </div>

            <div>
              <label className="block mb-1">عدد الأسهم المراد استثمارها</label>
              <Input
                type="number"
                min="1"
                step="1"
                {...register("number_of_arrows", {
                  required: true,
                  min: 1,
                  valueAsNumber: true // مهم عشان يبقى رقم مش سترينج
                })}
              />
            </div>

            <div>
              <label className="block mb-1">ملاحظات</label>
              {/* خليتها textarea عشان ارتفاع حقيقي */}
              <textarea
                placeholder="ملاحظات"
                {...register("notes", { required: true })}
                className="w-full p-2 rounded border h-20"
              />
            </div>

            <div className="flex justify-between mt-4">
              <Button type="button" variant="outline" onClick={() => reset()}>
                إعادة تعيين
              </Button>
              <Button type="submit" className="cursor-pointer bg-[#DFC96D] hover:bg-[#c9b25a]">
                إرسال
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
