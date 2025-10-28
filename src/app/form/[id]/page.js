"use client"

import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import axios from "axios"
import toast from "react-hot-toast"
import { useParams } from "next/navigation"

export default function Form() {

const params = useParams()
  const id =  params?.id 

console.log(id);
 
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      invest_id: id,
      number_of_arrows: 1
    }
  })

  const onSubmit = async (data) => {
    
    try {
     
      console.log("sending:", JSON.stringify(data, null, 2))

      const res = await axios.post(
        "https://tadbeer.wj.edu.sa/public/api/investors",data)

      toast.success("تم الارسال بنجاح")
      
      console.log("response", res.data)
    
      
      reset()
     
    } catch (err) {
      console.error("submit error", err)
    
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
                  valueAsNumber: true
                })}
              />
            </div>

            <div>
              <label className="block mb-1">ملاحظات</label>
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
