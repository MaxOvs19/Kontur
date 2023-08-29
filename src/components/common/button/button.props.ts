export interface IButton {
  onClick(e: React.MouseEvent): void | Promise<void>
  className?: string
  children?: React.ReactNode
  disabled?: boolean
}
