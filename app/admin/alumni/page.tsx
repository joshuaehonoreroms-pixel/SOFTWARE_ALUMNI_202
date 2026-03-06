"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { Check, X, Search, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AlumniApprovals() {
  const alumni = useQuery(api.alumni.getAlumni);

  const addAlumni = useMutation(api.alumni.addAlumni);
  const approveAlumni = useMutation(api.alumni.approveAlumni);
  const rejectAlumni = useMutation(api.alumni.rejectAlumni);
  const deleteAlumni = useMutation(api.alumni.deleteAlumni);

  if (!alumni) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-slate-400">Loading alumni...</p>
      </div>
    );
  }

  const handleAddAlumni = async () => {
    await addAlumni({
      name: "John Doe",
      email: "john.doe@example.com",
      graduationYear: 2022,
      specialization: "Software Engineering",
      company: "Google",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Alumni Approvals</h1>
        <Button onClick={handleAddAlumni} className="bg-blue-600">
          Add Test Alumni
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Applicant</TableHead>
            <TableHead>Graduation</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {alumni.map((a) => (
            <TableRow key={a._id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>
                      {a.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{a.name}</p>
                    <p className="text-xs text-slate-400">{a.email}</p>
                  </div>
                </div>
              </TableCell>

              <TableCell>
                {a.graduationYear}
                <p className="text-xs text-slate-400">{a.specialization}</p>
              </TableCell>

              <TableCell className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-blue-500" />
                {a.company}
              </TableCell>

              <TableCell>
                <Badge
                  className={
                    a.status === "Pending"
                      ? "bg-amber-500/10 text-amber-500"
                      : a.status === "Approved"
                      ? "bg-green-500/10 text-green-500"
                      : "bg-red-500/10 text-red-500"
                  }
                >
                  {a.status}
                </Badge>
              </TableCell>

              <TableCell className="text-right flex gap-2 justify-end">
                <Button
                  size="sm"
                  className="bg-green-600"
                  onClick={() => approveAlumni({ id: a._id })}
                >
                  <Check className="h-4 w-4" />
                </Button>

                <Button
                  size="sm"
                  variant="ghost"
                  className="text-red-400"
                  onClick={() => rejectAlumni({ id: a._id })}
                >
                  <X className="h-4 w-4" />
                </Button>

                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => deleteAlumni({ id: a._id })}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
