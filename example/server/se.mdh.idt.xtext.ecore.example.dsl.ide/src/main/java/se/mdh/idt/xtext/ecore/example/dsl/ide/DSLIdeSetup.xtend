/*
 * generated by Xtext 2.17.0
 */
package se.mdh.idt.xtext.ecore.example.dsl.ide

import com.google.inject.Guice
import org.eclipse.xtext.util.Modules2
import se.mdh.idt.xtext.ecore.example.dsl.DSLRuntimeModule
import se.mdh.idt.xtext.ecore.example.dsl.DSLStandaloneSetup

/**
 * Initialization support for running Xtext languages as language servers.
 */
class DSLIdeSetup extends DSLStandaloneSetup {

	override createInjector() {
		Guice.createInjector(Modules2.mixin(new DSLRuntimeModule, new DSLIdeModule))
	}
	
}
