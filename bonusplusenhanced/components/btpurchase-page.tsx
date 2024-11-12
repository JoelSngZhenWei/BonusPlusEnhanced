"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeftIcon } from "@radix-ui/react-icons"
import { Upload, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { CalendarIcon } from "@radix-ui/react-icons"

export function BlockPage() {
  const [purchaseCategory, setPurchaseCategory] = useState("")
  const [amount, setAmount] = useState("")
  const [date, setDate] = useState<Date>()
  const [additionalDetails, setAdditionalDetails] = useState("")
  const [documents, setDocuments] = useState<File[]>([])
  const [status, setStatus] = useState("Pending")
  const [agreed, setAgreed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 bg-red-600 text-white p-4 z-50 flex items-center">
        <Link href="/home/bonusplus">
          <ArrowLeftIcon className="h-6 w-6 mr-4" />
        </Link>
        <h1 className="text-xl font-semibold">Big Ticket Purchase</h1>
      </div>

      {/* Main Content */}
      <main className="pt-16 p-4 space-y-4">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Purchase Category Selection */}
          <Card>
            <CardHeader>
              <CardTitle>Purchase Category</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup onValueChange={setPurchaseCategory} className="flex flex-col space-y-2">
                {["Property Downpayment", "Wedding", "Car", "Renovation"].map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <RadioGroupItem value={category} id={category} />
                    <Label htmlFor={category}>{category}</Label>
                    <Popover>
                      <PopoverTrigger>
                        <Info className="h-4 w-4 text-gray-500" />
                      </PopoverTrigger>
                      <PopoverContent>
                        {`Required documents for ${category.toLowerCase()}`}
                      </PopoverContent>
                    </Popover>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Purchase Details Form */}
          <Card>
            <CardHeader>
              <CardTitle>Purchase Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="amount">Amount (SGD)</Label>
                <Input
                  id="amount"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                />
              </div>
              <div className="space-y-2">
                <Label>Expected Payment Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <CalendarIcon
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <Label htmlFor="details">Additional Details</Label>
                <Textarea
                  id="details"
                  value={additionalDetails}
                  onChange={(e) => setAdditionalDetails(e.target.value)}
                  placeholder="Enter any special details"
                />
              </div>
            </CardContent>
          </Card>

          {/* Document Uploads Section */}
          <Card>
            <CardHeader>
              <CardTitle>Document Uploads</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Upload Required Documents</Label>
                <div className="flex items-center space-x-2">
                  <Input
                    type="file"
                    onChange={(e) => setDocuments(Array.from(e.target.files || []))}
                    multiple
                    accept=".pdf,.jpg,.jpeg,.png"
                  />
                  <Button type="button" size="icon">
                    <Upload className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm text-gray-500">
                  Supported file types: PDF, JPEG, PNG. Max size: 10MB per file.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Validation and Approval Status */}
          <Card>
            <CardHeader>
              <CardTitle>Approval Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <div
                  className={cn(
                    "h-3 w-3 rounded-full",
                    status === "Pending" && "bg-yellow-500",
                    status === "Approved" && "bg-green-500",
                    status === "Rejected" && "bg-red-500"
                  )}
                />
                <span className="font-medium">{status}</span>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Bank review note: Your submission is being processed. We&apos;ll update you if any additional information is required.
              </p>
            </CardContent>
          </Card>

          {/* User Agreement and Confirmation */}
          <Card>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="agreement"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
                />
                <Label htmlFor="agreement" className="text-sm">
                  I agree to the terms and conditions for big-ticket purchases
                </Label>
              </div>
              <Button type="submit" className="w-full bg-red-600 hover:bg-red-700" disabled={!agreed}>
                Submit Purchase Request
              </Button>
            </CardContent>
          </Card>
        </form>

        {/* Customer Support Link */}
        <div className="text-center">
          <Link href="/support" className="text-red-600 hover:underline">
            Need help? Contact customer support
          </Link>
        </div>
      </main>
    </div>
  )
}