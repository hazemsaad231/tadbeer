"use client"

import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function Form() {
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    // Here you can handle the form submission, e.g., send data to an API
  }

  return (
    <>
    <div className="h-full flex items-center justify-center py-20 p-4 bg-gray-100">
    <Card className="w-full md:w-1/2 shadow-lg">
      <CardHeader>
        <CardTitle>نموذج استثمار</CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div>
            <label className="block mb-1">الاسم الكامل</label>
            <Input
              placeholder="اكتب اسمك الكامل"
              {...register("name", { required: true })}
            />
          </div>

          <div>
            <label className="block mb-1">الدولة</label>
            <Input
              placeholder="مثلاً: السعودية / مصر"
              {...register("country", { required: true })}
            />
          </div>

          <div>
            <label className="block mb-1">رقم الهاتف</label>
            <Input
              placeholder="05xxxxxxxx"
              {...register("phone", { required: true })}
            />
          </div>

          <div>
            <label className="block mb-1">عدد الأسهم المراد استثمارها</label>
            <Input
              type="number"
              min="1"
              {...register("shares", { required: true, min: 1 })}
            />
          </div>

          <div className="flex justify-between mt-4">
            <Button type="button" variant="outline" onClick={() => reset()}>
              إعادة تعيين
            </Button>
            <Button type="submit">إرسال</Button>
          </div>
        </form>
      </CardContent>
    </Card>
    </div>
    </>
  )
}
