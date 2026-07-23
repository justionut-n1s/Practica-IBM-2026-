<<<<<<< Updated upstream
import { Button, Icon, Image, Text, Hyperlink, Card, Heading } from './components/atoms'

=======
import { Button, Icon, Image, Text, Hyperlink, Card, Heading, PriceTag } from './components/atoms'
import { ProductCard } from './components/molecules'
>>>>>>> Stashed changes
// test rapid, verific tot ce am facut pana acum

function App() {
  return (
    <>
      <Heading lvl={1}>Test</Heading>
      <Heading lvl={2}>Test</Heading>
      <Heading lvl={3}>Test</Heading>
      <Heading lvl={4}>Test</Heading>
      <Heading lvl={2} light>Test - light</Heading>


      <Image src="https://placehold.co/200x150" alt="poza test" width={200} height={150} />
      <Image src="https://placehold.co/200x150" alt="poza test rotunda" width={200} height={150} rounded />

      <Icon src="https://placehold.co/40" alt="icon test" size={40} />
      <Icon src="https://placehold.co/20" alt="icon mic" size={20} />

      <Hyperlink message="PlaceHold" link="https://placehold.co/" />

      <Card>
        <Text>test card content</Text>
      </Card>
      <Card variant="flat">
        <Text>card flat test</Text>
        <Button>ok</Button>
      </Card>
      <ProductCard imageSrc='https://placehold.co/200x200' name='Produs Test' category='Test' provider='PLACEHOLD' rating={3.2} price='25.25' oldPrice='30' badgeText='NEW' badgeVariant='green'/>
      
    </>
  )
}

export default App