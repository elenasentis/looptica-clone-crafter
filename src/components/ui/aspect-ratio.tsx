
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"
import { cn } from "@/lib/utils"

interface AspectRatioProps extends React.ComponentPropsWithoutRef<typeof AspectRatioPrimitive.Root> {
  classNames?: string;
}

const AspectRatio = ({ 
  classNames,
  ratio = 16 / 9, 
  className, 
  ...props 
}: AspectRatioProps) => (
  <AspectRatioPrimitive.Root
    ratio={ratio}
    className={cn(classNames, className)}
    {...props}
  />
)

export { AspectRatio }
