import { Observable, Subject } from 'rxjs';

export class ObservableBus<T> extends Observable<T> {
	protected _subject$ = new Subject<T>();

	constructor() {
		super();
	}
}
