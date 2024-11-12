"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeftIcon, CalendarIcon } from "@radix-ui/react-icons"
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
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { format } from "date-fns"

export default function BlockPage() {
  const router = useRouter()
  const [purchaseCategory, setPurchaseCategory] = useState("")
  const [amount, setAmount] = useState("")
  const [date, setDate] = useState<Date>()
  const [additionalDetails, setAdditionalDetails] = useState("")
  const [unitNumber, setUnitNumber] = useState("")
  const [street, setStreet] = useState("")
  const [postalCode, setPostalCode] = useState("")
  const [vendor, setVendor] = useState("")
  const [model, setModel] = useState("")
  const [agreed, setAgreed] = useState(false)
  const [isSubmitDialogOpen, setIsSubmitDialogOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitDialogOpen(true)
  }

  const getPurchaseDetailsInfo = () => {
    switch (purchaseCategory) {
      case "Property Downpayment":
        return "Please provide the property details \n and expected downpayment amount."
      case "Wedding":
        return "Include details about the vendor and expected wedding date."
      case "Car":
        return "Specify the down payment amount, vendor, and car model."
      case "Renovation":
        return "Describe the renovation project, vendor, and estimated costs."
      default:
        return "Select a purchase category for more information."
    }
  }

  const handleDialogClose = () => {
    setIsSubmitDialogOpen(false)
    router.push("/home/bonusplusaccount")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 bg-red-600 text-white p-4 z-50 flex items-center">
        <Link href="/home/bonusplusaccount">
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
              <CardTitle className="font-bold my-2">Purchase Category</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup onValueChange={setPurchaseCategory} className="flex flex-col space-y-2">
                {["Property Downpayment", "Wedding", "Car", "Renovation"].map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <RadioGroupItem value={category} id={category} />
                    <Label htmlFor={category}>{category}</Label>
                  </div>
                ))}
              </RadioGroup>
              <Dialog>
                <DialogTrigger asChild>
                  <div className="flex items-center gap-2 mt-4 cursor-pointer">
                    <Info className="w-5 h-5" />
                    <span className="text-sm text-gray-600">How does BonusMax support your purchase?</span>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>How <span className="ocbc-red font-black">BonusMax</span> Works</DialogTitle>
                    <DialogDescription>
                       BonusMax supports you in reaching life&apos;s big goals.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4">
                    <ul className="list-disc pl-4 space-y-2">
                      <li>Withdrawals are allowed for select expenses</li>
                      <li>Property and vehicle downpayments</li>
                      <li>Wedding and renovation expenses with approved vendors</li>
                      <li>Earn cashback on these expenses</li>
                    </ul>
                  </div>
                  {/* Centered Rate Line */}
                  <div className="text-center -mt-1">
                    Your current rate is: <span className="font-black ocbc-red">2.8%</span>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>

          {/* Purchase Details Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between font-bold ">
                Purchase Details
                <Dialog>
                  <DialogTrigger asChild>
                    <Info className="h-5 w-5 text-gray-500 cursor-pointer" />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Purchase Details Information</DialogTitle>
                      <DialogDescription>
                      Validating your expense
                    </DialogDescription>
                    </DialogHeader>
                    <p>{getPurchaseDetailsInfo()}</p>
                  </DialogContent>
                </Dialog>
              </CardTitle>
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
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              {purchaseCategory === "Property Downpayment" && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="unitNumber">Unit Number</Label>
                    <Input
                      id="unitNumber"
                      value={unitNumber}
                      onChange={(e) => setUnitNumber(e.target.value)}
                      placeholder="Enter unit number"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="street">Street</Label>
                    <Input
                      id="street"
                      value={street}
                      onChange={(e) => setStreet(e.target.value)}
                      placeholder="Enter street name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="postalCode">Postal Code</Label>
                    <Input
                      id="postalCode"
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                      placeholder="Enter postal code"
                    />
                  </div>
                </>
              )}
              {(purchaseCategory === "Wedding" || purchaseCategory === "Renovation") && (
                <div className="space-y-2">
                  <Label htmlFor="vendor">Vendor</Label>
                  <Input
                    id="vendor"
                    value={vendor}
                    onChange={(e) => setVendor(e.target.value)}
                    placeholder="Enter vendor name"
                  />
                </div>
              )}
              {purchaseCategory === "Car" && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="vendor">Vendor</Label>
                    <Input
                      id="vendor"
                      value={vendor}
                      onChange={(e) => setVendor(e.target.value)}
                      placeholder="Enter vendor name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="model">Model</Label>
                    <Input
                      id="model"
                      value={model}
                      onChange={(e) => setModel(e.target.value)}
                      placeholder="Enter car model"
                    />
                  </div>
                </>
              )}
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
                  I agree to the <span className="text-red-600 hover:underline">terms and conditions</span> for big-ticket purchases
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
          <div className="text-red-600 hover:underline transition-all duration-300 clickable">
            Need help? Contact customer support
          </div>
        </div>
      </main>

      {/* Submission Confirmation Dialog */}
      <Dialog open={isSubmitDialogOpen} onOpenChange={handleDialogClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Purchase Request Submitted</DialogTitle>
            <DialogDescription>
              Your big ticket purchase request has been successfully submitted. Here are the details:
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 space-y-2">
            <p><strong>Category:</strong> {purchaseCategory}</p>
            <p><strong>Amount:</strong> SGD {amount}</p>
            <p><strong>Expected Payment Date:</strong> {date ? format(date, "PPP") : "Not specified"}</p>
            {purchaseCategory === "Property Downpayment" && (
              <>
                <p><strong>Unit Number:</strong> {unitNumber}</p>
                <p><strong>Street:</strong> {street}</p>
                <p><strong>Postal Code:</strong> {postalCode}</p>
              </>
            )}
            {(purchaseCategory === "Wedding" || purchaseCategory === "Renovation" || purchaseCategory === "Car") && (
              <p><strong>Vendor:</strong> {vendor}</p>
            )}
            {purchaseCategory === "Car" && (
              <p><strong>Model:</strong> {model}</p>
            )}
            <p><strong>Additional Details:</strong> {additionalDetails || "None provided"}</p>
          </div>
          <Button onClick={handleDialogClose} className="mt-4 w-full bg-red-600 hover:bg-red-700">
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  )
}