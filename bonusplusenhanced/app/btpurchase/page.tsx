"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeftIcon, CalendarIcon } from "@radix-ui/react-icons"
import { Upload, Info, CheckCircle } from 'lucide-react'
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
import { motion } from "framer-motion"

export default function BigTicketPurchasePage() {
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
        return "Please provide the property details and expected downpayment amount."
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
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      {/* Fixed Header */}
      <motion.div 
        className="fixed top-0 left-0 right-0 bg-gradient-to-r from-red-600 to-red-700 text-white p-4 z-50 flex items-center shadow-md"
        initial={{ y: -40 }}
        animate={{ y: 0 }}
        transition={{ duration:0.2 }}
      >
        <Link href="/home/bonusplusaccount">
          <Button variant="ghost" size="icon" className="mr-4 text-white hover:bg-white/20">
            <ArrowLeftIcon className="h-6 w-6" />
          </Button>
        </Link>
        <h1 className="text-xl font-semibold">Big Ticket Purchase</h1>
      </motion.div>

      {/* Main Content */}
      <main className="pt-20 p-4 max-w-2xl mx-auto">
        <motion.form 
          onSubmit={handleSubmit} 
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {/* Purchase Category Selection */}
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 p-3">
            <CardHeader>
              <CardTitle className="font-bold text-lg text-red-600">Purchase Category</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup onValueChange={setPurchaseCategory} className="grid grid-cols-2 gap-4">
                {["Property Downpayment", "Wedding", "Car", "Renovation"].map((category) => (
                  <div key={category} className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                    <RadioGroupItem value={category} id={category} />
                    <Label htmlFor={category} className="font-medium">{category}</Label>
                  </div>
                ))}
              </RadioGroup>
              <Dialog>
                <DialogTrigger asChild>
                  <div className="flex items-center gap-2 mt-4 cursor-pointer text-red-600 hover:text-red-700 transition-colors duration-300">
                    <Info className="w-5 h-5" />
                    <span className="text-sm font-medium">How does BonusMax support your purchase?</span>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-red-600">How BonusMax Works</DialogTitle>
                    <DialogDescription>
                      BonusMax supports you in reaching life's big goals.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4">
                    <ul className="list-disc pl-4 space-y-2 text-gray-600">
                      <li>Withdrawals are allowed for select expenses</li>
                      <li>Property and vehicle downpayments</li>
                      <li>Wedding and renovation expenses with approved vendors</li>
                      <li>Earn cashback on these expenses</li>
                    </ul>
                  </div>
                  {/* Centered Rate Line */}
                  <div className="text-center text-lg font-semibold">
                    Your current rate is: <span className="text-red-600">2.8%</span>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>

          {/* Purchase Details Form */}
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 p-3">
            <CardHeader>
              <CardTitle className="flex items-center justify-between font-bold text-lg text-red-600">
                Purchase Details
                <Dialog>
                  <DialogTrigger asChild>
                    <Info className="h-5 w-5 text-gray-500 cursor-pointer hover:text-red-600 transition-colors duration-300" />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="text-xl font-bold text-red-600">Purchase Details Information</DialogTitle>
                      <DialogDescription>
                        Validating your expense
                      </DialogDescription>
                    </DialogHeader>
                    <p className="text-gray-600">{getPurchaseDetailsInfo()}</p>
                  </DialogContent>
                </Dialog>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="amount" className="font-medium">Amount (SGD)</Label>
                <Input
                  id="amount"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                />
              </div>
              <div className="space-y-2">
                <Label className="font-medium">Expected Payment Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal border-gray-300 hover:bg-red-50",
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
                    <Label htmlFor="unitNumber" className="font-medium">Unit Number</Label>
                    <Input
                      id="unitNumber"
                      value={unitNumber}
                      onChange={(e) => setUnitNumber(e.target.value)}
                      placeholder="Enter unit number"
                      className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="street" className="font-medium">Street</Label>
                    <Input
                      id="street"
                      value={street}
                      onChange={(e) => setStreet(e.target.value)}
                      placeholder="Enter street name"
                      className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="postalCode" className="font-medium">Postal Code</Label>
                    <Input
                      id="postalCode"
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                      placeholder="Enter postal code"
                      className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                    />
                  </div>
                </>
              )}
              {(purchaseCategory === "Wedding" || purchaseCategory === "Renovation") && (
                <div className="space-y-2">
                  <Label htmlFor="vendor" className="font-medium">Vendor</Label>
                  <Input
                    id="vendor"
                    value={vendor}
                    onChange={(e) => setVendor(e.target.value)}
                    placeholder="Enter vendor name"
                    className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                  />
                </div>
              )}
              {purchaseCategory === "Car" && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="vendor" className="font-medium">Vendor</Label>
                    <Input
                      id="vendor"
                      value={vendor}
                      onChange={(e) => setVendor(e.target.value)}
                      placeholder="Enter vendor name"
                      className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="model" className="font-medium">Model</Label>
                    <Input
                      id="model"
                      value={model}
                      onChange={(e) => setModel(e.target.value)}
                      placeholder="Enter car model"
                      className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                    />
                  </div>
                </>
              )}
              <div className="space-y-2">
                <Label htmlFor="details" className="font-medium">Additional Details</Label>
                <Textarea
                  id="details"
                  value={additionalDetails}
                  onChange={(e) => setAdditionalDetails(e.target.value)}
                  placeholder="Enter any special details"
                  className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                />
              </div>
            </CardContent>
          </Card>

          {/* Document Uploads Section */}
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 p-3">
            <CardHeader>
              <CardTitle className="font-bold text-lg text-red-600">Document Uploads</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="font-medium">Upload Required Documents</Label>
                <div className="flex items-center space-x-2">
                  <Input
                    type="file"
                    multiple
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                  />
                  <Button type="button" size="icon" className="bg-red-600 hover:bg-red-700">
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
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardContent className="space-y-4 pt-6">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="agreement"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
                />
                <Label htmlFor="agreement" className="text-sm">
                  I agree to the <span className="text-red-600 hover:underline cursor-pointer">terms and conditions</span> for big-ticket purchases
                </Label>
              </div>
              <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 transition-colors duration-300" disabled={!agreed}>
                Submit Purchase Request
              </Button>
            </CardContent>
          </Card>
        </motion.form>

        {/* Customer Support Link */}
        <div className="text-center mt-6">
          <motion.div 
            className="text-red-600 hover:underline transition-all duration-300 cursor-pointer inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Need help? Contact customer support
          </motion.div>
        </div>
      </main>

      {/* Submission Confirmation Dialog */}
      <Dialog open={isSubmitDialogOpen} onOpenChange={handleDialogClose}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-red-600 flex items-center">
              <CheckCircle className="mr-2 h-6 w-6 text-green-500" />
              Purchase Request Submitted
            </DialogTitle>
            <DialogDescription>
              Your big ticket purchase request has been successfully submitted. Here are the details:
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 space-y-2 text-gray-700">
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
          <Button onClick={handleDialogClose} className="mt-4 w-full bg-red-600 hover:bg-red-700 transition-colors duration-300">
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  )
}