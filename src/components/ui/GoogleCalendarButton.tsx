
import React from 'react';
import { Button, ButtonProps } from "@/components/ui/button";
import { Calendar as CalendarIcon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from "@/components/ui/use-toast";

interface GoogleCalendarButtonProps extends Omit<ButtonProps, 'onClick'> {
  subject?: string;
  description?: string;
  location?: string;
  durationMinutes?: number;
}

const GoogleCalendarButton = ({
  subject = 'Looptica Consultation',
  description = 'Appointment at Looptica for services',
  location = 'Looptica, Costa Brava, Spain',
  durationMinutes = 60,
  className,
  children,
  ...props
}: GoogleCalendarButtonProps) => {
  const { t } = useLanguage();
  const { toast } = useToast();

  const createGoogleCalendarLink = () => {
    try {
      // Start date is tomorrow at 10am
      const startDate = new Date();
      startDate.setDate(startDate.getDate() + 1);
      startDate.setHours(10, 0, 0, 0);
      
      // End date is start date + duration
      const endDate = new Date(startDate);
      endDate.setMinutes(endDate.getMinutes() + durationMinutes);
      
      // Format dates for Google Calendar URL
      const formatDate = (date: Date) => {
        return date.toISOString().replace(/-|:|\.\d+/g, '');
      };
      
      const formattedStart = formatDate(startDate);
      const formattedEnd = formatDate(endDate);
      
      // Create Google Calendar URL
      const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(subject)}&dates=${formattedStart}/${formattedEnd}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}&sf=true&output=xml`;
      
      // Open URL in new tab
      window.open(googleCalendarUrl, '_blank');
      
      // Show toast
      toast({
        title: t('appointmentScheduled'),
        description: t('calendarOpened'),
      });
    } catch (error) {
      console.error('Error creating Google Calendar link:', error);
      toast({
        title: t('errorScheduling'),
        description: t('tryAgainLater'),
        variant: "destructive"
      });
    }
  };

  return (
    <Button 
      onClick={createGoogleCalendarLink}
      className={`bg-[#009fe3] hover:bg-[#0082b8] text-white transition-colors ${className}`}
      {...props}
    >
      <CalendarIcon className="mr-2 h-4 w-4" />
      {children || t('scheduleConsultation')}
    </Button>
  );
};

export default GoogleCalendarButton;
