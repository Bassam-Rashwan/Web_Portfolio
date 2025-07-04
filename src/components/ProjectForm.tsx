
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ProjectFormProps {
  onSubmit: (project: {
    title: string;
    description: string;
    technologies: string[];
    link?: string;
    image?: string;
    type: 'academic' | 'professional' | 'personal';
  }) => void;
  onCancel: () => void;
}

export const ProjectForm = ({ onSubmit, onCancel }: ProjectFormProps) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    technologies: '',
    link: '',
    image: '',
    type: 'professional' as 'academic' | 'professional' | 'personal'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title.trim() || !formData.description.trim()) {
      return;
    }

    onSubmit({
      title: formData.title.trim(),
      description: formData.description.trim(),
      technologies: formData.technologies.split(',').map(tech => tech.trim()).filter(tech => tech),
      link: formData.link.trim() || undefined,
      image: formData.image.trim() || undefined,
      type: formData.type
    });
    
    setFormData({
      title: '',
      description: '',
      technologies: '',
      link: '',
      image: '',
      type: 'professional'
    });
  };

  return (
    <Card className="max-w-2xl mx-auto bg-white shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Add New Project
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="title" className="text-sm font-medium text-gray-700">
              Project Title *
            </Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Enter project title"
              className="mt-1"
              required
            />
          </div>

          <div>
            <Label htmlFor="type" className="text-sm font-medium text-gray-700">
              Project Type
            </Label>
            <Select value={formData.type} onValueChange={(value: 'academic' | 'professional' | 'personal') => setFormData({ ...formData, type: value })}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="professional">Professional</SelectItem>
                <SelectItem value="academic">Academic</SelectItem>
                <SelectItem value="personal">Personal</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="description" className="text-sm font-medium text-gray-700">
              Description *
            </Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Describe your project, its objectives, and key achievements"
              className="mt-1 min-h-[100px]"
              required
            />
          </div>

          <div>
            <Label htmlFor="technologies" className="text-sm font-medium text-gray-700">
              Technologies Used
            </Label>
            <Input
              id="technologies"
              value={formData.technologies}
              onChange={(e) => setFormData({ ...formData, technologies: e.target.value })}
              placeholder="Enter technologies separated by commas (e.g., Python, Power BI, SQL)"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="image" className="text-sm font-medium text-gray-700">
              Project Image URL (Optional)
            </Label>
            <Input
              id="image"
              type="url"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              placeholder="https://example.com/image.jpg"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="link" className="text-sm font-medium text-gray-700">
              Project Link (Optional)
            </Label>
            <Input
              id="link"
              type="url"
              value={formData.link}
              onChange={(e) => setFormData({ ...formData, link: e.target.value })}
              placeholder="https://example.com"
              className="mt-1"
            />
          </div>

          <div className="flex gap-4 pt-4">
            <Button type="submit" className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
              Add Project
            </Button>
            <Button type="button" variant="outline" onClick={onCancel} className="flex-1">
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
