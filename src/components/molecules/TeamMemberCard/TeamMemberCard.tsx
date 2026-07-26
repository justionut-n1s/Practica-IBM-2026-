import { Card, Image, Heading, Text, Icon } from '../../atoms'
import './TeamMemberCard.css'

interface SocialLink {
    icon: string
    link: string
}

interface TeamMemberCardProps {
    imageSrc: string
    name: string
    role: string
    socialLinks: SocialLink[]
}

// Card membru echipa. 

function TeamMemberCard({ imageSrc, name, role, socialLinks }: TeamMemberCardProps) {
  return (
    <Card className="team-member-card">
      
      <Image src={imageSrc} alt={name} width={200} height={200} />

      <Heading lvl={4}>{name}</Heading>

      <Text variant="header2-button" type="p">{role}</Text>

      <div className="team-member-card__social">

        {socialLinks.map((social) => (

          <a key={social.link} href={social.link}>
            <Icon src={social.icon} alt="social" size={16} />
          </a>
          
        ))}

      </div>
    </Card>
  )
}

export default TeamMemberCard