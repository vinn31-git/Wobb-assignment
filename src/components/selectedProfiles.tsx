import {
    DragDropContext,
    Droppable,
    Draggable,
    type DropResult,
} from "@hello-pangea/dnd";
import { useSelectedProfilesStore } from "@/store/selectedProfilesStore";

export function SelectedProfiles() {
    const {
        selectedProfiles,
        removeProfile,
        reorderProfiles,
    } = useSelectedProfilesStore();

    const handleDragEnd = (result: DropResult) => {
        if (!result.destination) return;

        reorderProfiles(result.source.index, result.destination.index);
    };

    return (
        <div className="border rounded-lg p-4 bg-white">
            <h2 className="text-lg font-semibold mb-4">
                Selected Profiles ({selectedProfiles.length})
            </h2>

            {selectedProfiles.length === 0 ? (
                <p className="text-gray-500">No profiles selected.</p>
            ) : (
                <DragDropContext onDragEnd={handleDragEnd}>
                    <Droppable droppableId="selected-profiles">
                        {(provided) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                className="space-y-3"
                            >
                                {selectedProfiles.map((profile, index) => (
                                    <Draggable
                                        key={profile.username}
                                        draggableId={profile.username}
                                        index={index}
                                    >
                                        {(provided) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className="flex items-center justify-between border rounded p-3 bg-white"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <img
                                                        src={profile.picture}
                                                        alt={profile.username}
                                                        className="w-10 h-10 rounded-full"
                                                    />

                                                    <div>
                                                        <p className="font-medium">
                                                            @{profile.username}
                                                        </p>

                                                        <p className="text-sm text-gray-500">
                                                            {profile.fullname}
                                                        </p>
                                                    </div>
                                                </div>

                                                <button
                                                    onClick={() =>
                                                        removeProfile(profile.username)
                                                    }
                                                    className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        )}
                                    </Draggable>
                                ))}

                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            )}
        </div>
    );
}