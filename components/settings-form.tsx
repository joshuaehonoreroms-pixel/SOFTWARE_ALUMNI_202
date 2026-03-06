"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { User, Bell, Shield, Eye, Mail, Lock, Smartphone } from "lucide-react"

export function SettingsForm() {
  const [isUpdating, setIsUpdating] = useState(false)

  const handleUpdate = () => {
    setIsUpdating(true)
    setTimeout(() => setIsUpdating(false), 1000)
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Settings</h1>
        <p className="text-muted-foreground mt-1">Manage your account preferences and network visibility.</p>
      </div>

      <Tabs defaultValue="account" className="space-y-6">
        <TabsList className="bg-muted/50 p-1">
          <TabsTrigger value="account" className="gap-2">
            <User className="h-4 w-4" />
            Account
          </TabsTrigger>
          <TabsTrigger value="notifications" className="gap-2">
            <Bell className="h-4 w-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="privacy" className="gap-2">
            <Shield className="h-4 w-4" />
            Privacy
          </TabsTrigger>
        </TabsList>

        {/* Account Settings */}
        <TabsContent value="account">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Update your photo and personal details.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-6">
                  <Avatar className="h-24 w-24 border-2 border-primary/20">
                    <AvatarImage src="/placeholder.svg?height=96&width=96" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm">
                      Change Photo
                    </Button>
                    <p className="text-xs text-muted-foreground">JPG, GIF or PNG. Max size of 800K</p>
                  </div>
                </div>

                <Separator />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="Jane" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" defaultValue="jane.doe@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" defaultValue="Mountain View, CA" />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-muted/30 border-t px-6 py-4">
                <Button onClick={handleUpdate} disabled={isUpdating}>
                  {isUpdating ? "Saving..." : "Save Changes"}
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-destructive/20">
              <CardHeader>
                <CardTitle className="text-destructive">Danger Zone</CardTitle>
                <CardDescription>Permanently delete your account and all associated data.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Once you delete your account, there is no going back. Please be certain.
                </p>
                <Button variant="destructive" size="sm">
                  Delete Account
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Notification Settings */}
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Control how and when you receive updates.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-sm font-semibold flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" /> Email Notifications
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Mentorship Requests</Label>
                      <p className="text-xs text-muted-foreground">When a student requests your mentorship.</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Network Activity</Label>
                      <p className="text-xs text-muted-foreground">Weekly digest of posts and updates.</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <h3 className="text-sm font-semibold flex items-center gap-2">
                  <Smartphone className="h-4 w-4 text-secondary" /> Push Notifications
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Direct Messages</Label>
                      <p className="text-xs text-muted-foreground">Instant alerts for new messages.</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Job Opportunities</Label>
                      <p className="text-xs text-muted-foreground">Alerts for new internships and roles.</p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-muted/30 border-t px-6 py-4">
              <Button onClick={handleUpdate} disabled={isUpdating}>
                {isUpdating ? "Saving..." : "Save Preferences"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Privacy Settings */}
        <TabsContent value="privacy">
          <Card>
            <CardHeader>
              <CardTitle>Privacy & Visibility</CardTitle>
              <CardDescription>Manage who can see your profile and activity.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-sm font-semibold flex items-center gap-2">
                  <Eye className="h-4 w-4 text-primary" /> Profile Visibility
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Public Profile</Label>
                      <p className="text-xs text-muted-foreground">Allow non-members to view your basic profile.</p>
                    </div>
                    <Switch />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Online Status</Label>
                      <p className="text-xs text-muted-foreground">Show when you are active on the network.</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <h3 className="text-sm font-semibold flex items-center gap-2">
                  <Lock className="h-4 w-4 text-secondary" /> Data & Security
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Two-Factor Authentication</Label>
                      <p className="text-xs text-muted-foreground">Add an extra layer of security to your account.</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Enable
                    </Button>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Active Sessions</Label>
                      <p className="text-xs text-muted-foreground">Manage your logged-in devices.</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      View All
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
