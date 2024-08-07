'use client';

import React from 'react';
import { Select, SelectContent, SelectItem } from "@/components/ui/select";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const TaskManager = () => {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 shadow">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">Task Manager</h1>
        </div>
      </header>
      <main className="flex-1 container mx-auto py-8 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2">
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-2">Task List</h2>
              <div className="flex items-center mb-4">
                <Select defaultValue="all">
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="incomplete">Incomplete</SelectItem>
                    </SelectContent>
                </Select>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Prepare for team meeting</TableCell>
                    <TableCell>Gather relevant materials and talking points for the meeting.</TableCell>
                    <TableCell>2023-07-05</TableCell>
                    <TableCell>
                      <Badge variant="secondary">Incomplete</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button size="sm" onClick={() => {}}>
                          Complete
                        </Button>
                        <Button variant="secondary" size="sm" onClick={() => {}}>
                          Delete
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Review marketing materials</TableCell>
                    <TableCell>Provide feedback on the new marketing brochure and website content.</TableCell>
                    <TableCell>2023-07-15</TableCell>
                    <TableCell>
                      <Badge>Completed</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="secondary" size="sm" onClick={() => {}}>
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
          <div>
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-2">Create Task</h2>
              <form onSubmit={(e) => {
                e.preventDefault();
              }}>
                <div className="mb-4">
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" required />
                </div>
                <div className="mb-4">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" required />
                </div>
                <div className="mb-4">
                  <Label htmlFor="dueDate">Due Date</Label>
                  <Input id="dueDate" type="date" required />
                </div>
                <Button type="submit">Save Task</Button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default TaskManager;
