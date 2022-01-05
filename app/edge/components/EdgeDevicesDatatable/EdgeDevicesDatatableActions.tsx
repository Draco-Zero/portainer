import { Link } from '@/portainer/components/Link';
import type {Environment } from '@/portainer/environments/types';
import { Button } from '@/portainer/components/Button';

interface Props {
  selectedItems: Environment[];
  isAddActionVisible: boolean;
}

export function EdgeDevicesDatatableActions({
  selectedItems,
  isAddActionVisible,

}: Props) {
  const selectedItemCount = selectedItems.length;
  console.log("selectedItemCount");
  console.log(selectedItemCount);

  return (
    <div className="actionBar">
      {isAddActionVisible && (
        <Link to="docker.containers.new" className="space-left">
          <Button>
            <i className="fa fa-plus space-right" aria-hidden="true" />
            Add new
          </Button>
        </Link>
      )}
    </div>
  );

}
