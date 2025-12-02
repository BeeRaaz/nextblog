import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function BlogCardSkeleton() {
  return (
    <>
      <article>
        <Card className="h-full animate-pulse py-10">
          <CardHeader className="space-y-5">
            <CardTitle className="h-6 bg-muted-foreground rounded-sm">
              <h2></h2>
            </CardTitle>
            <CardDescription className="h-6 bg-muted-foreground rounded-sm"></CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative py-40 rounded-sm overflow-hidden mb-5 bg-muted-foreground"></div>
            <p className="h-6 bg-muted-foreground rounded-sm"></p>
          </CardContent>
        </Card>
      </article>
    </>
  );
}
