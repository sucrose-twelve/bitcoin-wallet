import { Svg } from './svg'

export function FolderIcon(props: React.SVGAttributes<SVGElement>) {
  return (
    <Svg {...props}>
      <path
        d='M21.9446 15.7579C21.9446 19.336 19.836 21.4446 16.2579 21.4446H8.47173C4.88444 21.4446 2.77588 19.336 2.77588 15.7579V7.9626C2.77588 4.38444 4.09031 2.27588 7.66847 2.27588H9.66749C10.3858 2.27588 11.0621 2.61406 11.4931 3.18868L12.4059 4.40269C12.8378 4.97618 13.5135 5.31406 14.2315 5.31549H17.0611C20.6484 5.31549 21.972 7.14108 21.972 10.7923L21.9446 15.7579Z'
        fillRule='evenodd'
        clipRule='evenodd'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7.55884 14.4891H17.1523'
        opacity={0.4}
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
