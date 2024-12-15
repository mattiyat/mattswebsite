import {
    Card as BaseCard,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

interface Props {
    data: {
        title : string;
        body: string;
        href: string;
    }

} 
  
export function Card({data}: Props) {
    return(
        <BaseCard className="w-[350px]">
        <CardHeader>
            <CardTitle>{data.title}</CardTitle>
            <CardDescription>{data.body}</CardDescription>
        </CardHeader>
        <CardContent>
    
        </CardContent>
        <CardFooter>
            {data.href}
        </CardFooter>
      </BaseCard>
    )

}

