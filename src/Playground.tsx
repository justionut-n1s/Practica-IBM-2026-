import { Button, Icon, Image, Text, Hyperlink, Card, Heading, PriceTag } from './components/atoms'
<<<<<<< Updated upstream
import { ProductCard } from './components/molecules'
=======
import { ProductCard, NavItem, ProductRow, Dropdown, TeamMemberCard } from './components/molecules'
import cart from './assets/icons/cart.svg'
>>>>>>> Stashed changes

function App() {
    return (
        <>

<<<<<<< Updated upstream

      <Image src="https://placehold.co/200x150" alt="poza test" width={200} height={150} />
      <Image src="https://placehold.co/200x150" alt="poza test rotunda" width={200} height={150} rounded />

      <Icon src="https://placehold.co/40" alt="icon test" size={40} />
      <Icon src="https://placehold.co/20" alt="icon mic" size={20} />

      <Hyperlink message="PlaceHold" link="https://placehold.co/" />

      < PriceTag  price="$28.85" oldPrice="$32.80" />

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
=======
        <div style={{ display: 'flex', gap: '24px' }}>
            <NavItem textItem="Home" link="/" />
            <NavItem textItem="About" link="/about" />
            <NavItem textItem="Shop" link="/shop" />
            <Dropdown label="Vendors" options={['All Vendors', 'NEW Vendors', 'Popular Vendors']} />
        </div>

        <Heading lvl={1}>Heading 1</Heading>
        <Heading lvl={2}>Heading 2</Heading>
        <Heading lvl={3}>Heading 3</Heading>
        <Heading lvl={4}>Heading 4</Heading>

        
        <Heading lvl={1}>PRODUCTS</Heading>
        <div style={{ display: 'flex', gap: '24px' }}>
        <ProductCard
            imageSrc="https://placehold.co/200x200"
            name="Produs Test"
            name_link="https://placehold.co/200x200"
            category="Test"
            provider="PLACEHOLD"
            rating={3.2}
            price="25.25"
            oldPrice="30"
            badgeText="NEW"
            badgeVariant="green"
        />
         <ProductCard
            imageSrc="https://placehold.co/200x200"
            name="Produs Test"
            name_link="https://placehold.co/200x200"
            category="Test"
            provider="PLACEHOLD"
            rating={4.2}
            price="25.25"
            oldPrice="30"
            badgeText="-20%"
            badgeVariant="pink"
        />
         <ProductCard
            imageSrc="https://placehold.co/200x200"
            name="Produs Test"
            name_link="https://placehold.co/200x200"
            category="Test"
            provider="PLACEHOLD"
            rating={5}
            price="25.25"
            oldPrice="30"
            badgeText="FRESH!"
            badgeVariant="blue"
        />
         <ProductCard
            imageSrc="https://placehold.co/200x200"
            name="Produs Test"
            name_link="https://placehold.co/200x200"
            category="Test"
            provider="PLACEHOLD"
            rating={1}
            price="25.25"
            oldPrice="30"
            badgeText="WOW"
            badgeVariant="orange"
        />
        </div>

        <Heading lvl={1}>POPULAR PRODUCTS</Heading>
        <div>
        <ProductRow
            imageSrc="https://placehold.co/100x100"
            name="Produs Test"
            name_link="https://placehold.co/200x200"
            rating={4}
            price="34"
            oldPrice="50"
        />
        <ProductRow
            imageSrc="https://placehold.co/100x100"
            name="Produs Test"
            name_link="https://placehold.co/200x200"
            rating={4}
            price="34"
            oldPrice="50"
        />
        <ProductRow
            imageSrc="https://placehold.co/100x100"
            name="Produs Test"
            name_link="https://placehold.co/200x200"
            rating={4}
            price="34"
            oldPrice="50"
        />
        <ProductRow
            imageSrc="https://placehold.co/100x100"
            name="Produs Test"
            name_link="https://placehold.co/200x200"
            rating={4}
            price="34"
            oldPrice="50"
        />
        </div>

        <TeamMemberCard
            imageSrc="https://placehold.co/200x200"
            name="Ana Popescu"
            role="Worker"
            socialLinks={[
                { icon: cart, link: 'https://facebook.com' },
                { icon: cart, link: 'https://twitter.com' }
            ]}
        />
        </>
    )
>>>>>>> Stashed changes
}

export default App