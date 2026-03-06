"use client"

import { FileEdit, Save, Eye, History } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContentManagement() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Site Content</h1>
          <p className="text-slate-400 mt-1">Update static pages, clearance guides, and FAQs.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="bg-transparent border-slate-700 text-white">
            <History className="mr-2 h-4 w-4" /> Revisions
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Save className="mr-2 h-4 w-4" /> Save All Changes
          </Button>
        </div>
      </div>

      <Tabs defaultValue="department" className="w-full">
        <TabsList className="bg-slate-900 border border-slate-800 p-1 mb-6">
          <TabsTrigger value="department" className="data-[state=active]:bg-slate-800 data-[state=active]:text-white">
            Department Overview
          </TabsTrigger>
          <TabsTrigger value="clearance" className="data-[state=active]:bg-slate-800 data-[state=active]:text-white">
            Clearance Process
          </TabsTrigger>
          <TabsTrigger value="faq" className="data-[state=active]:bg-slate-800 data-[state=active]:text-white">
            FAQ & Info
          </TabsTrigger>
        </TabsList>

        <TabsContent value="department">
          <Card className="bg-slate-900 border-slate-800 text-white">
            <CardHeader>
              <CardTitle>Department Overview Content</CardTitle>
              <CardDescription className="text-slate-400">
                Edit the main department mission, vision, and leadership sections.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="page-title">Page Title</Label>
                <Input
                  id="page-title"
                  defaultValue="About the Software Engineering Department"
                  className="bg-slate-800 border-slate-700"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mission">Department Mission Statement</Label>
                <Textarea
                  id="mission"
                  className="bg-slate-800 border-slate-700 min-h-[120px]"
                  defaultValue="Our mission is to foster innovation and excellence in software engineering education..."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="vision">Vision & Goals</Label>
                <Textarea
                  id="vision"
                  className="bg-slate-800 border-slate-700 min-h-[150px]"
                  defaultValue="To be a world-class department leading the way in technology and research..."
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="clearance">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="md:col-span-2 bg-slate-900 border-slate-800 text-white">
              <CardHeader>
                <CardTitle>Clearance Guide Editor</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold text-blue-400">Step 1: Departmental Approval</h4>
                    <Button variant="ghost" size="sm" className="h-7 text-xs">
                      <FileEdit className="h-3 w-3 mr-1" /> Edit
                    </Button>
                  </div>
                  <p className="text-sm text-slate-400">
                    Students must first submit their project logs to the department head for initial verification...
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-dashed border-slate-700 bg-transparent text-slate-400"
                >
                  Add New Process Step
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-800 text-white">
              <CardHeader>
                <CardTitle className="text-sm">Page Preview</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center h-[200px] text-slate-500 italic text-sm">
                <Eye className="h-10 w-10 mb-2 opacity-20" />
                Live preview not available in edit mode
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="faq">
          <Card className="bg-slate-900 border-slate-800 text-white">
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-400 italic">FAQ content editor interface loading...</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
